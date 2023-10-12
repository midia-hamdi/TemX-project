import React from 'react';

export default function Rectangle({ color, style }) {
  return (
    <div className='rectangle' style={{ background: color, ...style }}></div>
  );
}
