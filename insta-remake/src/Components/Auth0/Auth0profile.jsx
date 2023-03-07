import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Auth0logout";
import LoginButton from "./Auth0login";

const Auth0Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className = 'flex items-center'>
        <div className = 'flex items-center w-[250px]'>
          <a href = ''><img src={user.picture} alt={'...'} className = 'rounded-full h-14 v-14 border border-gray-400'/></a>
          <div className = 'ml-4'>
            <a href='' className = 'text-gray-800 font-medium text-sm'>{user.nickname.toLowerCase()}</a>
            <p className = 'text-[13px] opacity-50 tracking-tight'>{user.name}</p>
          </div>
        </div>
        <button className = 'text-xs font-semibold tracking-tight text-blue-500 hover:text-blue-900'>Switch</button>
      </div>
    )
  );
};

export default Auth0Profile; 