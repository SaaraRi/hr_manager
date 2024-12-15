import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosRequest from "../../services/useAxios";
import { useEmployeeStatus } from "../../hooks/useEmployeeStatus";
import Button from "../../components/Button/Button";
import styles from "./SinglePage.module.css";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, read } = useAxiosRequest(
    `http://localhost:3001/persons/${id}`
  );

  useEffect(() => {
    read();
  }, []);

  const { yearsWorked } = useEmployeeStatus(data?.startDate);

  if (loading) return <p>Loading...</p>;

  if (!data) return <p>No data available.</p>;

  return (
    <div>
      {data && (
        <div className={styles.singlePageContent}>
          <div className={styles.status}>
            <p>{data.firstName}</p>
            <p>{data.startDate}</p>
            <p className={styles.lessImportant}>{yearsWorked} years</p>
          </div>
        
            <div className={styles.data}>
              <div className={styles.role}>
                <p>{data.role}</p>
                <p>{data.department}</p>
                <p>{data.location}</p>
              </div>
          </div>
        </div>
      )}
      <Button text="Back" role="primary-light" onClick={() => navigate(-1)} />
    </div>
  );
};

export default SinglePage;
