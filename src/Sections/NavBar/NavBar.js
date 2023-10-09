import React, { useEffect, useState } from 'react';
import Notification from '../../Assets/Images/notification.svg'

export default function NavBar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 100000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="navbar">
      <ul className="nav-options">
        <li>صفحه اصلی</li>
        <li>قیمت ارزها</li>
        <li>وبلاگ</li>
        <li>قوانین و مقررات</li>
        <li>سوالات متداول</li>
      </ul>
      <div className="date-time">
        <span>{currentDateTime.toLocaleDateString('fa-IR')}</span>
        <span>{currentDateTime.toLocaleTimeString('fa-IR')}</span>
      </div>
      <img src={Notification} alt="Bell Icon" />
    </div>
  );
}
