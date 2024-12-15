import { useState } from "react";
import Button from "../components/Button/Button";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className="formBase"
    >
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="name">Role</label>
      <input type="text" name="role" />
      <label htmlFor="name">Department</label>
      <input type="text" name="department" />
      <label htmlFor="name">Start Date</label>
      <input type="date" name="startDate" />
      <label htmlFor="location">Location</label>
      <input type="text" name="location" />
      <Button text="Add new" type="submit" />
    </form>
  );
};

export default Form;
