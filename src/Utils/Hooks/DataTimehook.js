import React, { useEffect, useState } from 'react';

export default function DataTimehook() {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      const currentDateTime = new Date();
      const newFormattedDate = `${getPersianWeekday(currentDateTime.getDay())} ، ${currentDateTime.getDate()} ${getPersianMonth(currentDateTime.getMonth())} ، ساعت: ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;
      setFormattedDate(newFormattedDate);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function getPersianWeekday(weekday) {
    const weekdays = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه']
    return weekdays[weekday];
  }

  function getPersianMonth(month) {
    const months = ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهر', 'مهر', 'آبان', 'آذر']
    return months[month];
  }

  return formattedDate;
}
