import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types";

type SliceInfoProps = {
  sliceId: number;
};

const SliceInfo: React.FC<SliceInfoProps> = ({ sliceId }) => {
  const customChartName = useSelector((state: RootState) => {
    const layout = state.dashboardLayout.present;
    // Ищем LayoutItem, у которого meta.chartId совпадает с sliceId
    const layoutItem = Object.values(layout).find(
      (item) => item.meta.chartId === sliceId
    );
    if (layoutItem) {
      return layoutItem.meta.sliceNameOverride || layoutItem.meta.sliceName;
    }
    return "Unknown Chart";
  });

  return (
    <div>
      <h1>{customChartName}</h1>
    </div>
  );
};

export default SliceInfo;
