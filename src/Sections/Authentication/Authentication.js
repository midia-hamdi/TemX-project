import React from 'react';
import TextAuthentication from './TextAuthentication';
import Rectangle from '../../Components/Rectangle';
import { coloredRectangleStyle, gradientRectangleStyle } from '../../Styles/Authenticationcss';

export default function Authentication() {
  return (
    <div>
      <TextAuthentication />
        <div className="rectangle-row">
          <Rectangle style={coloredRectangleStyle} className="rectanglespace" />
          <Rectangle style={coloredRectangleStyle} className="rectanglespace" />
          <Rectangle style={gradientRectangleStyle} className="rectanglespace" />
        </div>
      </div>
  );
}


