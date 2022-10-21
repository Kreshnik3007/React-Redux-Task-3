import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import classes from "./user.module.css";
import ReactModal from "react-modal";
import allActions from "../store/actions";

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

const SelectedUser = () => {
  const selectedUsers = useSelector((state) => state.selectedUsers.selected);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  let subtitle;

  const triggerModal = () => {
    setModalVisible(!modalVisible);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "#cornflowerblue";
  };

  const deleteUser = (user) => {
    dispatch(allActions.deleteUserSelected(user));
    setModalVisible(false);
  };

  return (
    <>
      <div className={classes.sort}>
        <button onClick={() => dispatch(allActions.sortAscending())}>
          ASC
        </button>
        <button onClick={() => dispatch(allActions.sortDescending())}>
          DSC
        </button>
      </div>
      <div className={classes.cardsRow}>
        {selectedUsers &&
          selectedUsers.map((user) => {
            return (
              <div key={user.id} className={classes.card}>
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
                  <button onClick={() => triggerModal()}>Close</button>
                  <button
                    key={user.id}
                    onClick={() => deleteUser(user)}
                    className={classes.modalButton}
                  >
                    Delete
                  </button>
                </ReactModal>
                <div className={classes.user}>
                  <button onClick={triggerModal}>X</button>
                  <h2>{user.label}</h2>
                  <p>E-Mail: {user.email}</p>
                  <p>Adress: {user.address}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Company: {user.company}</p>
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SelectedUser;
