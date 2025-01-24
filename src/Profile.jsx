import React from 'react';
import { FaUser } from 'react-icons/fa'; // Importing the FaUser icon from react-icons
import './profile.css';

const Profile = () => {
  return (
    <>
    
    <div className="profile-container">
      <FaUser className="profile-icon" />
      </div>
     
     <div> <p className="username" >Aniket</p></div>
     
    
    
        </>
    
    
    
  );
};

export default Profile;
