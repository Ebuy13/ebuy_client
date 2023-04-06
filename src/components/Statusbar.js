import React, { useContext } from 'react';
import UserContext from './Signup';

function StatusBar() {
  const { user } = useContext(UserContext);

  return (
    <div className="status-bar">
      {user && (
        <p>
          Logged in as {user.name} ({user.email})
        </p>
      )}
    </div>
  );
}

export default StatusBar;
