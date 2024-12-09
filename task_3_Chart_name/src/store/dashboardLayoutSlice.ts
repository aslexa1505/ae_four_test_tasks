import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardLayoutState } from '../types';

const initialState: DashboardLayoutState = {
  present: {
    // Пример начального состояния. Заполните реальными данными или загрузкой из API
    'layout1': {
      children: [],
      parents: [],
      type: 'chart',
      id: 'layout1',
      meta: {
        chartId: 1,
        sliceName: 'Default Chart Name 1',
        height: 400,
        width: 600,
        uuid: 'uuid-1',
      },
    },
    'layout2': {
      children: [],
      parents: [],
      type: 'chart',
      id: 'layout2',
      meta: {
        chartId: 2,
        sliceName: 'Default Chart Name 2',
        sliceNameOverride: 'Custom Chart Name 2',
        height: 400,
        width: 600,
        uuid: 'uuid-2',
      },
    },
  },
};

const dashboardLayoutSlice = createSlice({
  name: 'dashboardLayout',
  initialState,
  reducers: {
    // Добавьте необходимые редьюсеры, например, для обновления layout
    setLayout(state, action: PayloadAction<DashboardLayoutState>) {
      state.present = action.payload.present;
    },
  },
});

export const { setLayout } = dashboardLayoutSlice.actions;
export default dashboardLayoutSlice.reducer;
