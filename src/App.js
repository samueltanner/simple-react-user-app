import { useState } from "react";
import "./App.css";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";
function App() {
  const INTIALUSERLIST = [
    {
      id: 1,
      name: "Sam",
      age: "28",
    },
  ];

  const handleAddUser = (user) => {
    setUserList((prevUsers) => [...prevUsers, user]);
  };

  const [userList, setUserList] = useState(INTIALUSERLIST);
  return (
    <div className="App">
      <UserForm onAddUser={handleAddUser} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
