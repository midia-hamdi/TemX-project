import React from 'react';
import TextAuthentication from './TextAuthentication.js';
import Rectangle from '../../Components/Rectangle.js';
import { coloredRectangleStyle, gradientRectangleStyle } from '../../Styles/Authenticationcss.js';
import { SizeRectangleStyle } from '../../Styles/SizeRectangle.js';
import Level from './Level.js';
import ImgAuthentication from './ImgAuthentication.js';
import TextLevel from './TextLevel.js';

export default function Authentication() {
  return (
    <div>
        <TextAuthentication />
                <div className='rectangle-auth'>
                    <Rectangle style={gradientRectangleStyle} className='small-rectangle1'/>
                    <Rectangle style={SizeRectangleStyle} className="large-rectangle1"/>
                    <Rectangle style={coloredRectangleStyle} className="small-rectangle2"/>
                    <Rectangle style={SizeRectangleStyle} className="large-rectangle2"/>
                    <Rectangle style={coloredRectangleStyle} className="small-rectangle3"/>
                </div>
            
            <Level texts={["سطح برنزی", "سطح نقره‌ای", "سطح طلایی"]}  />
            <ImgAuthentication />
            <TextLevel />
        </div>

  );
}


