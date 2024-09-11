import React from 'react'
import image1 from '../Assets/arrival_7.jpg';
import image2 from '../Assets/arrival_6.jpg';
import image3 from '../Assets/arrival_5.jpg';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='left'>
        <h1>UPTO 60% OFF..!</h1>
        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
    <button>Shop Now</button>
      </div>

      <div className='right'>
        <img src={image1} alt="image.."/>
        <img src={image2} alt="image.."/>
        <img src={image3} alt="image.."/>
      </div>
    </div>
  )
}

export default Banner
