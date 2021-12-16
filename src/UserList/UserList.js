import UserListItem from "./UserListItem";
import "./UserList.css";
const UserList = (props) => {
  return (
    <div className="list">
      {props.userList.map((user) => (
        <UserListItem name={user.name} age={user.age} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
