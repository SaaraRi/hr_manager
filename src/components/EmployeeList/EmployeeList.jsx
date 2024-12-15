import { useEffect, useState } from "react";
import useAxiosRequest from "../../services/useAxios.js";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css"

const EmployeeList = () => {
  const {
    data: employees,
    loading,
    error,
    read,
  } = useAxiosRequest("http://localhost:3001/");

  useEffect(() => {
    read("persons");
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

    return (
        <div className='list'>
            {(employees || []).map((employee) => {
        return <EmployeeCard key={employee.id} {...employee} />;
      })}
        </div>
    );
};

export default EmployeeList;

