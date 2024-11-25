import React from 'react';
import {SliderData} from './products';
import ProductSlider from'./ProductSlider'; 

const Container = () => {
  return (
    <div>
      <ProductSlider allitems={SliderData} />
    </div>
  );
}

export default Container;
