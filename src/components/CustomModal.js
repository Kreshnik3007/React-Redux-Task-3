import React from "react";
import ReactModal from "react-modal";
import classes from "./user.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function CustomModal(props) {
  let subtitle;
  const afterOpenModal = () => {
    subtitle.style.color = "#cornflowerblue";
  };
  const { setModalVisible, deleteUser, modalVisible } = props;

  return (
    <div>
      <ReactModal
        isOpen={modalVisible}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          This user will be deleted! Are you sure you want to proceed?
        </h2>
        <button onClick={() => setModalVisible(false)}>Close</button>
        <button onClick={deleteUser} className={classes.modalButton}>
          Delete
        </button>
      </ReactModal>
    </div>
  );
}

export default CustomModal;