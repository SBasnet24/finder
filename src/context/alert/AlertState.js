/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { REMOVE_ALERT, SET_ALERT } from "./../types";

const AlertState = (props) => {
  const initialState = {};
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  // Set Alert
  const setAlerts = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlerts }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
