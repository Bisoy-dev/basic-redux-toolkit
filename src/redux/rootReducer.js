import counterReducer from './features/counter'
import employeesReducer from './features/employees'
import usersReducers from './features/users'

const rootReducer = {
    counter : counterReducer,
    emps : employeesReducer,
    user : usersReducers
}

export default rootReducer;