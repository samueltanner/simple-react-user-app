import "./UserForm.css";
import Button from "../UI/Button";
import { useState } from "react";
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    console.log("this is a test");

    const user = {
      id: Math.random(),
      name: username,
      age: age,
    };
    props.onAddUser(user);
  };

  const onChangeUserName = (e) => {
    setUsername((prevUsername) => e.target.value);
  };

  const onChangeAge = (e) => {
    setAge((prevAge) => e.target.value);
  };
  // function test(e) {
  //   e.preventDefault();
  //   console.log("this is a test");
  // }

  return (
    <form className="form" onSubmit={addUser}>
      <div className="input">
        <label>Username</label>
        <input type="text" onChange={onChangeUserName} />
      </div>
      <div className="input">
        <label>Age (Years)</label>
        <input type="number" onChange={onChangeAge} />
      </div>
      <Button type="button" text={"Add User"} />
    </form>
  );
};

export default UserForm;
