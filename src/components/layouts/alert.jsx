import React, { useContext } from "react";
import AlertContext from "./../../context/alert/alertContext";

export const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  if (alert && alert.type) {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info circle">{alert.msg}</i>
      </div>
    );
  }
  return null;
};
