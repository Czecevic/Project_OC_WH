/* eslint-disable react-refresh/only-export-components */
import { EmployeeState } from "../interfaces/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

const initialState: EmployeeState = {
  employees: [],
};

export const EmployeeReducer = createSlice({
  name: "EmployeeAuth",
  initialState,
  reducers: {
    getAddEmployee: (state, action: PayloadAction<EmployeeState>) => {
      state.employees = [...state.employees, action.payload];
    },
  },
});

export const { getAddEmployee } = EmployeeReducer.actions;
export const selectEmployee = (state: RootState) => state.Employee.employees;
export default EmployeeReducer.reducer;
