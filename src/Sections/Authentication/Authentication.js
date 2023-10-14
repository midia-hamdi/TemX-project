import React from 'react';
import TextAuthentication from './TextAuthentication';
import Rectangle from '../../Components/Rectangle';
import { coloredRectangleStyle, gradientRectangleStyle } from '../../Styles/Authenticationcss';
import { SizeRectangleStyle } from '../../Styles/SizeRectangle.js';
import Level from './Level';

export default function Authentication() {
  return (
    <div>
      <TextAuthentication />
      <div className="rectangle-container">
          <div className="small-rectangle">
            <Rectangle style={gradientRectangleStyle} />
          </div>
          <div className="large-rectangle">
            <Rectangle style={SizeRectangleStyle} />
          </div>
          <div className="small-rectangle">
            <Rectangle style={coloredRectangleStyle} />
          </div>
          <div className="large-rectangle">
            <Rectangle style={SizeRectangleStyle} />
          </div>
          <div className="small-rectangle">
            <Rectangle style={coloredRectangleStyle} />
          </div>
        </div>
        <Level texts={["سطح برنزی", "سطح نقره‌ای", "سطح طلایی"]}  />

      </div>
  );
}


