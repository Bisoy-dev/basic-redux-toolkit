import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Employees from "./pages/Employees";
import EmployeesRedux from "./pages/EmployeesRedux";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserListRedux from "./pages/UserListRedux";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="employees" element={<EmployeesRedux/>}/>
          <Route path="users" element={<UserListRedux/>}/>
          <Route path="counter" element={<Counter/>}/>
        </Routes>
    </div>
  );
}

export default App;
