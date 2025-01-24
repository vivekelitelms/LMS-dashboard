import React from "react";
import "./NotificationList.css"; // Import the CSS file
import notifications from "./notificationsData"; // Import the data

function NotificationList() {
  return (
    <div className="notification-container">
      <h3 className="notification-title">Progress Till Now</h3>
      <ul className="notification-list">
        {notifications.map((notification, index) => (
          <li key={index} className="notification-item">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationList;
