import React from 'react';
import Logo from '../../Sections/Panel/Logo';
import ImageUser from '../../Sections/Panel/ImageUser';
import TextUser from './TextUser';
import Rectangle from './Rectangle';
import Item from './Item';

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
      <Item />
    </div>
  );
}
