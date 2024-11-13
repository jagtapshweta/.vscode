import React from 'react';
import '../css/Profile.css'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user')); 

  console.log("hii")
  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      
      <section className="profile-info">
        <h3>Account Information</h3>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        {/* Add more fields as needed */}
      </section>
      
      <section className="profile-orders">
        <h3>Order History</h3>
        <ul>
          {/* Mock orders; replace with actual data */}
          <li>Order #1234 - $59.99 - Delivered</li>
          <li>Order #1235 - $89.99 - Shipped</li>
          <li>Order #1236 - $29.99 - Processing</li>
        </ul>
      </section>

      <section className="profile-settings">
        <h3>Settings</h3>
        <button>Update Profile</button>
      </section>
    </div>
  );
};

export default Profile;
