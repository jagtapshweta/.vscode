// EmptyState.js
import React from 'react';
import './css/EmptyState.css'; // Add styling as needed

const EmptyState = ({ message, icon, type }) => {
  return (
    <div className={`empty-state empty-state--${type}`}>
      {icon && <div className="empty-state__icon">{icon}</div>}
      <p className="empty-state__message">{message}</p>
    </div>
  );
};

// Default props for flexibility
EmptyState.defaultProps = {
  message: "Nothing here yet!",
  icon: "📭", // Use an emoji as default or replace with an SVG/icon
  type: "default",
};

export default EmptyState;
