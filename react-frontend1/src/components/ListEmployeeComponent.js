import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

function ListUserComponent() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    },[])


    const getAllUsers = () => {
      EmployeeService.getAllUsers().then((response) => {
          setUsers(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteUser(employeeId).then((response) => {
        getAllUsers()
    }).catch(error => console.log(error))
  }

  


  return (
    
<div className='container'>
    
    <h2 className='text-center'>List Employees</h2>
   
    <table className='table table-bordered table-stripped'>
      <thead>
          <th>Sl No</th>
          <th>Full Name</th>
          <th>SSN</th>
          <th>Gender</th>
          <th>Email ID</th>
          <th>Age</th>
          <th>Address</th>
          <th>Actions</th>
      </thead>
      <tbody>
          {
              users.map(
                  (users,index) =>
                  <tr key={users.id}>
                      <td> {index+1} </td> 
                      <td> {users.fullName} </td>
                      <td> {users.ssn} </td>
                      <td> {users.gender} </td>
                      <td> {users.emailId} </td>
                      <td> {users.age} </td>
                      <td> {users.address} </td>
                      <td>
                        {/* <button className='btn btn-warning' onClick={() => updateEmployee(users.id)} style={{margin:"5px"}}>Update</button> */}
                        <button className='btn btn-danger' onClick={() => deleteEmployee(users.id)} style={{margin:"5px"}}>Delete</button>
                      </td>
                  </tr>
              )
          }
      </tbody>
    </table>
  
  </div>
     
    )
  }
    
export default ListUserComponent
