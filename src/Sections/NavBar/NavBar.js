import React, { useEffect, useState } from 'react';
import Notification from '../../Assets/Images/notification.svg';


export default function NavBar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = `${getPersianWeekday(currentDateTime.getDay())} ، ${currentDateTime.getDate()} ${getPersianMonth(
    currentDateTime.getMonth()
  )} ، ساعت: ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;

  function getPersianWeekday(weekday) {
    const weekdays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
    return weekdays[weekday];
  }

  function getPersianMonth(month) {
    const months = ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهر', 'مهر', 'آبان', 'آذر']
    return months[month];
  }

  return (
    <div className="navbar">
      <ul className="nav-options">
        <li>صفحه اصلی</li>
        <li>قیمت ارزها</li>
        <li>وبلاگ</li>
        <li>قوانین و مقررات</li>
        <li>سوالات متداول</li>
      </ul>
      <div className="date-time">{formattedDate}</div>
      <img src={Notification} alt="Bell Icon" className='notification-icon'/>
    </div>
  );
}
