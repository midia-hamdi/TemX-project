import React from 'react';
import Img1 from '../../Assets/Images/Artboard 1 copy 2.png';
import Img2 from '../../Assets/Images/Artboard 1 copy.png';
import Img3 from '../../Assets/Images/Artboard 1.png';

export default function ImgAuthentication() {
  return (
    <div className="img-auth-container">
      <img src={Img1} alt="Image 1" className="img1" />
      <img src={Img2} alt="Image 2" className="img2" />
      <img src={Img3} alt="Image 3" className="img3" />
    </div>
  );
}
