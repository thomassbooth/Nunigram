import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className = 'flex items-center'>
        <img src={user.picture} alt={user.name} className = 'rounded-full h-14 v-14 border border-gray-300'/>
        <div className = 'ml-4'>
          <a href='' className = 'font-medium text-sm'>{user.nickname.toLowerCase()}</a>
          <p className = 'font-light text-sm opacity-50 '>{user.name}</p>
        </div>
      </div>
    )
  );
};

export default Profile; 