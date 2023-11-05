import React from 'react'
import LogOutimg from '../../Assets/Images/logout.svg'

export default function LogOut() {
  return (
    <div className='Logout-img'>
    <img src={LogOutimg} className='icon-logout' />
    <span className="text-logout"> خروج از حساب</span>
</div>
  )
}
