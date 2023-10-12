import React from 'react';
import TextAuthentication from './TextAuthentication';
import Rectangle from '../../Components/Rectangle';

const coloredRectangleStyle = {
  background: 'var(--non-selected-blue-all, #DFEEFF)',
  width: '0.8375rem',
  height: '2.5rem',
  flexShrink: 0,
  // ... other custom styles
};

const gradientRectangleStyle = {
  background: 'var(--gradient-1, linear-gradient(68deg, #0066E2 32.63%, #1D82FF 70.87%))',
  width: '0.8375rem',
  height: '2.5rem',
  // ... other custom styles
};

export default function Authentication() {
  return (
    <div>
      <TextAuthentication />
      <div className="rectangle-container">
        <div className="rectangle-row">
          <Rectangle style={coloredRectangleStyle} />
          <Rectangle style={coloredRectangleStyle} />
          <Rectangle style={gradientRectangleStyle} />
        </div>
      </div>
    </div>
  );
}
