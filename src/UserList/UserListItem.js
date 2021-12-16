import "./UserListItem.css";
const UserListItem = (props) => {
  return (
    <div className="user">
      {props.name} {props.age}
    </div>
  );
};

export default UserListItem;
