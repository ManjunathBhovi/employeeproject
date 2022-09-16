import React from 'react'
import {Link} from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useForm } from "react-hook-form";
import { Col, Row } from 'react-bootstrap';

function RegisterEmployee() {

    const [fullName, setFullName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [ssn, setSSN] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState('')
    const [users, setUsers] = useState([])
    

    const { register, formState: { errors } } = useForm();

   
    const userRef = useRef()
       useEffect(() => {
        userRef.current.focus();
    }, [])


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


    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault()
        const employee = {fullName,ssn,gender, emailId, age, address}
  
        EmployeeService.createUser(employee).then((response) => {
                
                alert("Employee Registered Successfully")
               getAllUsers()
            })
        }
     
        // jsx code
        
    
  return (
   <>
   <div className={Row}>
       <div className={Col}>
    <div className="text-center m-5-auto">
         
      <h2>Employee Page</h2>
        <form className='form-class'>
            <p>
                <label>Full Name</label><br/>
                <input type="text" {...register("fullName",{required: "Name is required"})} autoComplete='off' name="fullName" placeholder="Enter FullName"  ref={userRef} onChange={(e) => setFullName(e.target.value)} value={fullName}  />
                {errors.fullName&&(<small className="text-danger">{errors.fullName.message}</small>)}
            </p>
            <p>
                <label>SSN</label><br/>
                <input type="number" autoComplete='off' name="ssn" placeholder="Enter ssn" {...register("ssn",{required: "SSN is required"})} onChange={(e) => setSSN(e.target.value)} value={ssn}  />
                {errors.ssn&&(<small className="text-danger">{errors.ssn.message}</small>)}
            </p>
            <p>
                <label>Gender</label><br/>
                <select id="gender" name="gender"  {...register("gender",{required: "gender is required"})} onChange={(e) => setGender(e.target.value)} value={gender}>
                <option value="select gender" defaultValue = "true" disabled = "disabled">select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
               
            </p>
            <p>
                <label>Email ID</label><br/>
                <input type="text" autoComplete='off' name="emailId"  {...register("emailId",{required: "emailId is required"})} placeholder="Enter Email" onChange={(e)=>setEmailId(e.target.value)} value={emailId}/>
                {errors.emailId&&(<small className="text-danger">{errors.emailId.message}</small>)}
            </p>
            
          
            <p>
                <label>Age</label><br/>
                <input type="number"  autoComplete='off' name="age" placeholder="Enter age"  onChange={(e) => setAge(e.target.value)} value={age} />
                
            </p>
            <p>
                <label>address</label><br/>
                <textarea type="textarea" rows="5" cols="30" value="textvalue"name="address" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} value={address} />
               
            </p>
            
            <p>
                <button id="sub_btn" type="submit" onClick={e => handleSubmit(e)} >Submit</button>
            </p>
            <p>
                <Link to='/List'>List Employee</Link>
            </p>
        </form>
       
    </div>
    </div>
    <div className={Col}>

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
     </div>
  </div>
</>
    
   
  )
}

export default RegisterEmployee

  
