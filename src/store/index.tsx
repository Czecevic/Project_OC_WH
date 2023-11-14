import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./Employee.stores";

export const store = configureStore({
  reducer: {
    Employee: EmployeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
