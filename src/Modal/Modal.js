import Button from "../UI/Button";
import "./Modal.css";
const Modal = (props) => {
  const handleClose = () => {
    props.closeModal();
  };

  return (
    <div>
      <div className="modal">
        <p>{props.bodyText}</p>
        <Button text="Close" onClick={handleClose} />
      </div>
    </div>
  );
};

export default Modal;
