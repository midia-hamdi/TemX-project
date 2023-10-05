import React from 'react'
import Images from '../../Assets/Images/Logo.png'



export default function Logo() {
  return (
    <div className='Logo-img'>
        <img src={Images} className='icon-logo' />
        <span className="text-logo">تم ایکس</span>
    </div>
  )
}
