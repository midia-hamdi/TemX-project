import React from 'react';
import Logo from '../../Sections/Panel/Logo';
import ImageUser from '../../Sections/Panel/ImageUser';
import TextUser from './TextUser';
import Rectangle from './Rectangle';
import Item from './Item';

// Import images items
import User from '../../Assets/Images/user.svg';
import Cart from '../../Assets/Images/cart.svg';
import Donate from '../../Assets/Images/donate.svg';
import Credit from '../../Assets/Images/creditcard.svg';
import Usercheck from '../../Assets/Images/usercheck.png';
import Ereceipt from '../../Assets/Images/ereceipt.svg';
import Help from '../../Assets/Images/help.svg';
import LogOut from './LogOut';


const items = [
    { icon: <img src={User} alt="User Icon" className='smalluser'/>, text: 'مشخصات کاربری' },
    { icon: <img src={Cart} alt="Cart Icon" />, text: 'خرید و فروش' },
    { icon: <img src={Donate} alt="Donate Icon" />, text: 'کسب درآمد' },
    { icon: <img src={Credit} alt="Credit Icon" />, text: 'اطلاعات بانکی' },
    { icon: <img src={Usercheck} alt="UserCheck Icon" />, text: 'احراز هویت' },
    { icon: <img src={Ereceipt} alt="E-Receipt Icon" />, text: 'تاریخچه سفارشات' },
    { icon: <img src={Help} alt="Help Icon" />, text: 'پشتیبانی' },
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
      <LogOut />
    </div>
  );
}
