import React from 'react';

export default function Item({ icon, text }) {
  return (
    <div className="item">
      <div className="item-icon">{icon}</div>
      <div className="item-text">{text}</div>
    </div>
  );
}