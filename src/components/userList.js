import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import allActions from "../store/actions";
import classes from "./user.module.css";
import SelectedUser from "./selectedUser";

const UsersList = () => {
  const users = useSelector((state) => state.selectedUsers.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.fetchUsers());
  }, [dispatch]);

  const onChangeHandler = (event) => {
    dispatch(allActions.selectUser(event));
  };

  return (
    <>
      <div className={classes.select}>
        {users && (
          <Select
            onChange={(event) => {
              onChangeHandler(event);
            }}
            placeholder="Select a User"
            options={users}
          />
        )}
      </div>

      <SelectedUser />
    </>
  );
};

export default UsersList;
