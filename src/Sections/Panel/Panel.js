import React from 'react';
import Logo from '../../Sections/Panel/Logo';
import ImageUser from '../../Sections/Panel/ImageUser';
import TextUser from './TextUser';
import Rectangle from './Rectangle';
import Item from './Item';
import {cart, credit, donate, ereceipt, help, usercheck, user } from '../../Assets/Images';

const items = [
    { icon: <FontAwesomeIcon icon={user} />, text: 'مشخصات کاربری' },
    { icon: <FontAwesomeIcon icon={cart} />, text: 'خرید و فروش' },
    { icon: <FontAwesomeIcon icon={donate} />, text: 'کسب درآمد' },
    { icon: <FontAwesomeIcon icon={credit} />, text: 'اطلاعات بانکی' },
    { icon: <FontAwesomeIcon icon={usercheck} />, text: 'احراز هویت' },
    { icon: <FontAwesomeIcon icon={ereceipt} />, text: 'تاریخچه سفارشات' },
    { icon: <FontAwesomeIcon icon={help} />, text: 'پشتیبانی' },
  ];

export default function Panel() {
  return (
    <div className='Pannel-section'>
      <Logo />
      <div className="user-container">
        <ImageUser />
        <div className="rectangles">
          <Rectangle color='var(--non-selected-blue-all, #DFEEFF)' />
          <Rectangle color='var(--non-selected-blue-all, #DFEEFF)' />
          <Rectangle color='var(--gradient-1, linear-gradient(68deg, #0066E2 32.63%, #1D82FF 70.87%))' />
        </div>
      </div>
      <TextUser />
      <div className="items">
        {items.map((item, index) => (
          <Item key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}
