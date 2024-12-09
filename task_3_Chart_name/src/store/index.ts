import { configureStore } from '@reduxjs/toolkit';
import dashboardLayoutReducer from './dashboardLayoutSlice';

const store = configureStore({
  reducer: {
    dashboardLayout: dashboardLayoutReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
