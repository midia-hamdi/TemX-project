import React, { useState } from 'react';

export default function Input(props) {
  const [name, setName] = useState(props.initialValue || ''); 

  return (
    <div className='forms'>
      <input
        type="input"
        placeholder="نام"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={props.style} // Apply the style prop
      />
    </div>
  );
}
