/* eslint-disable @typescript-eslint/no-explicit-any */
export type ComponentType = string;

export type LayoutItem = {
  children: string[];
  parents: string[];
  type: ComponentType;
  id: string;
  meta: {
    chartId: number;
    defaultText?: string;
    height: number;
    placeholder?: string;
    sliceName: string;
    sliceNameOverride?: string;
    text?: string;
    uuid: string;
    width: number;
  };
};

export type DashboardLayout = { [key: string]: LayoutItem };

export type DashboardLayoutState = { present: DashboardLayout };

export type DatasourcesState = object;
export type JsonObject = Record<string, any>;
export type ChartsState = object;
export type DashboardState = object;
export type DashboardInfo = object;
export type DataMaskStateWithId = object;
export type NativeFiltersState = object;
export type UserWithPermissionsAndRoles = object;

export type RootState = {
  datasources: DatasourcesState;
  sliceEntities: JsonObject;
  charts: ChartsState;
  dashboardLayout: DashboardLayoutState;
  dashboardFilters: object;
  dashboardState: DashboardState;
  dashboardInfo: DashboardInfo;
  dataMask: DataMaskStateWithId;
  impressionId: string;
  nativeFilters: NativeFiltersState;
  user: UserWithPermissionsAndRoles;
};
