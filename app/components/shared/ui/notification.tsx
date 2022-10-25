import {FC} from "react"

import classes from './notification.module.css';

export type RequestStatus = "pending" | "success" | "error"

export interface INotification{
  title: string,
  message: string,
  status: RequestStatus
}



const Notification:FC<INotification> = ({ title, message, status }) =>  {


  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
