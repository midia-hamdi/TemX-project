import React from 'react';

export default function Level({ texts }) {
  return (
    <div className="level-text">
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
