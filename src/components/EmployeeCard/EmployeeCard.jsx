import { useState } from 'react';
import './EmployeeCard.css';
import Button from '../Button/Button.jsx';

const EmployeeCard = (props) => {

    const {firstName, lastName, role, department, location, currentProject, education, startDate, vacationDaysAcc} = props; 

    const [promotedRole, setPromotedRole] = useState(false);

    const clickHandler = () => {
        if (role === 'Team Lead'){
            setPromotedRole(props.role);
        } else {
            setPromotedRole('Team Lead');
        }
    }; 

    return (
        <div id='card'>
            <div className="card-icons">
            {promotedRole && (
            <div>
              <span className="teamlead-icon">star</span>
              <p className="card-icon-message">Team Lead</p>
            </div>
            )}
            </div>
            <div className="card-image">
                <img src={`https://robohash.org/${firstName}${lastName}?set=set5`} alt={firstName} />
            </div>
            <p className='fullName'>{firstName} {lastName}</p> 
            <p className='intro'>{role}</p>
            <p className='intro'>{department}, {location}</p><br />
            <p>Current project: {currentProject}</p><br />
            <p>Education: {education}</p>
            <p>Started job: {startDate}</p>
            <p>Vacation days accumulated: {vacationDaysAcc}</p>
            <Button onClick={() => setPromotedRole((prev) => !prev)}
            text={promotedRole ? "Demote" : "Promote"} />
        </div>
    );
};

export default EmployeeCard;



