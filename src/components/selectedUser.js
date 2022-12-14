import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import classes from "./user.module.css";

import allActions from "../store/actions";
import CustomModal from "./CustomModal";



const SelectedUser = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const selectedUsers = useSelector((state) => state.selectedUsers.selected);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  

  const triggerModal = (user) => {
    setSelectedUser(user);
    setModalVisible(!modalVisible);
  };

 

  const deleteUser = () => {
    dispatch(allActions.deleteUserSelected(selectedUser));
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
                
                <div className={classes.user}>
                  <button onClick={() => triggerModal(user)}>X</button>
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
          <CustomModal modalVisible={modalVisible} deleteUser={deleteUser} setModalVisible={setModalVisible}/>

      </div>
    </>
  );
};

export default SelectedUser;