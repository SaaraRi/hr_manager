import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx';
import "./EmployeeList.css"
import {employeesData} from '../../data/employeesData.js';

const EmployeeList = () => {
    return (
            <div className='list'>
                {employeesData.map((employee) => {
                    return <EmployeeCard
                    key= {employee.id} {...employee}
                    />
                })}
            </div>
    );
};

export default EmployeeList;


/*const [employees, setEmployees] = useState(employeesData)
import { useState } from 'react';*/