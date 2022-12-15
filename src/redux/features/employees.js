import { createSlice } from "@reduxjs/toolkit";
import EmployeeService from "../../services/employeeService";

const employeesSlice = createSlice({
    name : 'employees',
    initialState : {
        employees : EmployeeService.getAll()
    },
    reducers : {
        onSelectToggle : (state, action) => {
            const index = state.employees.findIndex(e => e.id == action.payload.id)
            if(index < 0) return

            state.employees[index].isSelected = !state.employees[index].isSelected
        }
    }
})

export const { onSelectToggle } = employeesSlice.actions;
export default employeesSlice.reducer;
