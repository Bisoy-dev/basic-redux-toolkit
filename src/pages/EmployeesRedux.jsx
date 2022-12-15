
// i have create this new page of employees (EmployeesRedux) 
// cause the other one page still handles state even without using redux
// i get confused in the other one!!

// this is only for comparison between Employees and EmployeesPage 
// to know the differences.
import React, { useState } from 'react'
import EmployeeService from '../services/employeeService'
import { useSelector, useDispatch } from 'react-redux'
import { onSelectToggle } from '../redux/features/employees'

function EmployeesRedux() {

    const state = useSelector((state) => state.emps)
    const dispatch = useDispatch()
  const onSelectedToggle = (id) => {
    dispatch(onSelectToggle({ id }))
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

export default EmployeesRedux