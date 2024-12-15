import { useState } from 'react';
import './EmployeeCard.css';
import Button from '../Button/Button.jsx';
import promotedIcon from '../../assets/icons8-star-96.png'
import { calcYearsWorked } from "../../utilities/yearsCalc";
import { getDepartmentClass } from "../../utilities/styleUtils";

const EmployeeCard = ({firstName, lastName, role, department, location, currentProject, education, startDate, vacationDaysAcc}) => {

    const [promotedRole, setPromotedRole] = useState(false);
    const [person, setPerson] = useState({ department, location, role });
    const [isEditing, setIsEditing] = useState(false);

    const yearsWorked = calcYearsWorked(startDate);
    const isProbation = yearsWorked < 0.5;
    const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevState) => ({ ...prevState, [name]: value }));
      };

      const renderEditableField = (value, name) =>
        isEditing ? (
          <input value={value} name={name} onChange={handleInputChange} />
        ) : (
          <p className={name}>{value}</p>
        );

    return (
        <div className="card">
            <div className="card-icons">
            {promotedRole && (
            <div className="promoted">
                <img src={promotedIcon} className="teamlead-icon" alt="star icon" />
                <p className="card-icon-message">Team Lead</p>
            </div>
            )}
            {isAnniversary && (
            <div>
              <span className="">
                celebration
              </span>
              <p className="card-icon-message">
                Schedule recognition meeting, {yearsWorked} years at work
              </p>
            </div>
          )}
          {isProbation && (
            <div>
              <span className="">
                notifications
              </span>
              <p className="card-icon-message">
                Schedule probation review, employee has worked for less than 6 months.
              </p>
            </div>
          )}
            </div>
            <img src={`https://api.dicebear.com/9.x/croodles/svg?seed=${firstName}${lastName}`} className="card-image" alt={firstName} />
            <p className='fullName'>{firstName} {lastName}</p> 
            <div className="card-content">
                <div className="card-data">
                {renderEditableField(person.role, "role")}
                {renderEditableField(person.department, "department")}
                {renderEditableField(person.location, "location")}
                </div>
            <p className='intro'>{role}</p>
            <p className='intro'>{department}, {location}</p><br />
            <p>Current project: {currentProject}</p><br />
            <p>Education: {education}</p>
            <p>Started job: {startDate}</p>
            <p>Vacation days accumulated: {vacationDaysAcc}</p>
            <p className="years">
          <span className="text"> Full years at work: {yearsWorked} years </span>
          <span className="date">({startDate})</span>
            </p>
            </div>
            <Button 
            onClick={() => setPromotedRole((prev) => !prev)}
            text={promotedRole ? "Demote" : "Promote" } />
             <Button
            onClick={() => setIsEditing((prev) => !prev)}
            text={isEditing ? "Save" : "Edit"}
            role="secondary"/>
         
        </div>
    );
};

export default EmployeeCard;



