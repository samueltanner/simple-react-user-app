import UserListItem from "./UserListItem";
const UserList = (props) => {
  return (
    <div>
      {props.userList.map((user) => (
        <UserListItem name={user.name} age={user.age} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
