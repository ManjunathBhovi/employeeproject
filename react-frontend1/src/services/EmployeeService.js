import axios from 'axios'

const user_url = 'http://localhost:8090/users';

class EmployeeService{

    
    getAllUsers(){
        return axios.get(user_url)
    }

    createUser(employee){
        return axios.post(user_url, employee)
    }

      deleteUser(employeeId){
        return axios.delete(user_url + '/' + employeeId)
    }

}

export default new EmployeeService();
