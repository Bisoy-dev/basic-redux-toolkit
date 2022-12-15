import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Employees from "./pages/Employees";
import EmployeesRedux from "./pages/EmployeesRedux";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="employees" element={<EmployeesRedux/>}/>
          <Route path="users" element={<UserList/>}/>
          <Route path="counter" element={<Counter/>}/>
        </Routes>
    </div>
  );
}

export default App;
