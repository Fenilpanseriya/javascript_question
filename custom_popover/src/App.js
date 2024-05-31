import React, { useState } from 'react';
import './App.css';
import Popover from './components/Popover';

function App() {
  
  const buttons = ["show error", "show success", "show info", "show warning"];
  const messages = ["CORS error", "updated successfully", "page num. is 5", "set key prop in map for every child"];
  const [notifications, setNotifications] = useState([]);

  const handleClick = (e, index) => {
    e.preventDefault();
    const newNotification = {
      message: messages[index],
      type: buttons[index],
      location: 'top-right',
    };

    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

    // Remove the notification after 3 seconds
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.filter((_, i) => i !== 0));
    }, 3000);
  };

  return (
    <div className="App">
      <div className="inner">
        {buttons.map((button, index) => (
          <button key={index} onClick={(e) => handleClick(e, index)}>{button}</button>
        ))}
      </div>
      
        <Popover notifications={notifications} />
      
      
    </div>
  );
}

export default App;
