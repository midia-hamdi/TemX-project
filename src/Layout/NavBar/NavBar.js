import React from 'react';
import NavOption from './NavOption';
import NotifIcon from './NotifIcon';
import DataTimehook from '../../Utils/DataTimes';
import '../../Layout/NavBar/Style/Style.css'

export default function NavBar() {
  const formattedDate = DataTimehook(); // Call DataTimehook to get the formatted date

  return (
    <div className="navbar">
      <NavOption />
      <div className="date-time">{formattedDate}</div>
      <NotifIcon />
    </div>
  );
}
