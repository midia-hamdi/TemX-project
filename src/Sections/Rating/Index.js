import React from 'react';
import TextAuthentication from './Text.js';
import Rectangle from '../../Components/Rectangle.js';
import { coloredRectangleStyle, gradientRectangleStyle } from '../../Styles/Authenticationcss.js';
// import { SizeRectangleStyle } from '../../Styles/SizeRectangle.js';
import Level from './Level.js';
import Img from './Img.js';
import TextLevel from './TextLevel.js';
import '../../Sections/Rating/Style/Style.css'

export default function Authentication() {
  return (
    <div>
        <TextAuthentication />
                <div className='rectangle-auth'></div>
                    <Rectangle style={gradientRectangleStyle} className='small-rectangle1'/>
                    <Rectangle className="SizeRectangleStyle"/>
                    <Rectangle style={coloredRectangleStyle} className="small-rectangle2"/>
                    <Rectangle className="SizeRectangleStyle1"/>
                    <Rectangle style={coloredRectangleStyle} className="small-rectangle3"/>
                
            
            <Level texts={["سطح برنزی", "سطح نقره‌ای", "سطح طلایی"]}  />
            <Img />
            <TextLevel />
        </div>

  );
}


