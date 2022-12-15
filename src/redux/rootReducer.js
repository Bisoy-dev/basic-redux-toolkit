import counterReducer from './features/counter'
import employeesReducer from './features/employees'

const rootReducer = {
    counter : counterReducer,
    emps : employeesReducer
}

export default rootReducer;