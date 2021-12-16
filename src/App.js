import { useState } from "react";
import "./App.css";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";
import Modal from "./Modal/Modal";
function App() {
  const INTIALUSERLIST = [
    {
      id: 1,
      name: "Sam",
      age: "28",
    },
  ];

  const [userList, setUserList] = useState(INTIALUSERLIST);
  const [modal, showModal] = useState(false);
  const [modalBodyText, setModalBodyText] = useState("")

  const handleAddUser = (user) => {
    if (user.name === "" || user.age === "") {
      setModalBodyText("Users must have name and age")
      toggleModal();
      return;
    }

    if (user.age < 0) {
      setModalBodyText("User age must be greater than 0")
      toggleModal();
      return
    }
    setUserList((prevUsers) => [...prevUsers, user]);
  };

  const toggleModal = () => {
    showModal(!modal);
  };

  return (
    <div className="App">
      <UserForm onAddUser={handleAddUser} />
      <UserList userList={userList} />
      {/* <Modal closeModal={toggleModal} /> */}
      {modal && <Modal closeModal={toggleModal} bodyText={modalBodyText} />}
    </div>
  );
}

export default App;
