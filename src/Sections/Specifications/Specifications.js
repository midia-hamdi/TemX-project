import React from 'react';
import TextSpecifications from './TextSpecifications';
import FormsSpecifications from './FormsSpecifications';
import '../../Sections/Specifications/Style/Style.css'

function Specifications() {
  return (
    <div>
      <TextSpecifications />
      <FormsSpecifications />
    </div>
  );
}

export default Specifications;
