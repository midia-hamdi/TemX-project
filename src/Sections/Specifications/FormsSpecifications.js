// FormsSpecifications.js
import React from 'react';
import Input from '../../Components/Input.js';

export default function FormsSpecifications() {
  const customStyle = {
    display: 'flex',
    top: '0',
    right: '0',
    position: 'absolute',
    width: '15.25rem',
    height: '2rem',
    flexShrink: '0', // Correct the camelCase property names
    borderRadius: '0.3rem', // Correct the camelCase property names
    border: '0.01rem solid #DFEEFF',
    backgroundColor: '#F9FCFF', // Correct the camelCase property names
    margin: '1rem 1rem 0 0',
  };

  return (
    <div className='forms-input'>
      <Input initialValue='' style={customStyle} />
      
    </div>
  );
}
