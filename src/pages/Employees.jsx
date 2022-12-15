

// state is still there even without redux..
import React, { useState } from 'react'
import EmployeeService from '../services/employeeService'

function Employees() {

  const [state, setState] = useState({
    employees : EmployeeService.getAll()
  })
  const onSelectedToggle = (id) => {
    const index = state.employees.findIndex(e => e.id == id)
    if(index < 0) return

    state.employees[index].isSelected = !state.employees[index].isSelected;
    setState({
      ...state, employees: state.employees
    })
  }
  return <>
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="h3 text-primary">Employees</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod, quo cum cumque amet sapiente porro quisquam impedit quidem. Tenetur est consequatur ea magnam. Dignissimos autem ex quo dolorem quod.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">
            {
              state.employees.length > 0 && 
              state.employees.map((employee) => {
                return <li className="list-group-item" key={employee.id}>
                  <input checked={employee.isSelected} type="checkbox" className='form-check-input me-2' onChange={() => { onSelectedToggle(employee.id) }} />
                  {employee.name}
              </li>
              })
            }
          </ul>
        </div>
        <div className="col-md-6">
          {
            state.employees.length > 0 &&
            state.employees.filter(e => e.isSelected).map((employee) => {
              return <div key={employee.id} onClick={() => { onSelectedToggle(employee.id) }}>
                <div className="card my-2">
                  <div className="card-body">
                      <p className="h3 text-success">Selected Employee</p>
                      <ul className="list-group">
                        <li className="list-group-item">Name :{employee.name}</li>
                        <li className="list-group-item">Email: {employee.email}</li>
                      </ul>
                  </div>
                </div>
            </div>
            })
          }
        </div>
      </div>
    </div>
  </>
}

export default Employees