import React from 'react';
import useStyle from '../hooks/useStyle';

const Popover = ({ notifications }) => {

    const style=useStyle(notifications)
    
  return (
    <div className="popover-container"  style={{height:"30%",display:'flex',flexDirection:"column"}}>
      {notifications.map((notification, index) => (
        <div key={index} className={`${notification.location} ${notification.type.split(' ').join('-')} `} style={style[index]}>
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Popover;

