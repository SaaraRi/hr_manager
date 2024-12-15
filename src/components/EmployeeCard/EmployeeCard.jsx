import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAxiosRequest from "../../services/useAxios";
import { useEmployeeStatus } from "../../hooks/useEmployeeStatus";
import './EmployeeCard.css';
import Button from '../Button/Button.jsx';
import promotedIcon from '../../assets/icons8-star-96.png'

import { getDepartmentClass } from "../../utilities/styleUtils";

const EmployeeCard = ({id, firstName, lastName, role, department, location, currentProject, education, startDate, vacationDaysAcc}) => {

    const [promotedRole, setPromotedRole] = useState(false);
    const [person, setPerson] = useState({ department, location, role });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const { error, update } = useAxiosRequest("http://localhost:3001/");
    const { yearsWorked, isProbation, isAnniversary } =
    useEmployeeStatus(startDate);

   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevState) => ({ ...prevState, [name]: value }));
      };

      const handleEdit = () => {
        update(`persons/${id}`, person);
      };

      const renderEditableField = (value, firstName) => {
        const capitalizeWords = (text) =>
          text
            .toString()
            .replace(
              /\w\S*/g,
              (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            );
    
        const displayValue = value ? capitalizeWords(value) : "N/A";

        return isEditing ? (
            <input value={value || ""} name={firstName} onChange={handleInputChange} />
          ) : (
            <p>{displayValue}</p>
          );
        };
      
        if (error) return <p>{error}</p>;
    

    return (
        <div className="card">
            <div className={`${getDepartmentClass(person.department)}`}></div>
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
            onClick={() => navigate(`/employee/${id}`)}
            text={"See details"}
            role="secondary"
            />
            <Button
              onClick={() => {
                if (isEditing) handleEdit();
                setIsEditing((prev) => !prev);
              }}
              text={isEditing ? "Save" : "Edit"}
              role={isEditing ? "primary" : "secondary"}
            />
         
        </div>
    );
};

export default EmployeeCard;



