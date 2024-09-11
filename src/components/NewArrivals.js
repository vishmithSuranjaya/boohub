import React from 'react';
import book_4 from '../Assets/book_4.jpg';
import book_5 from '../Assets/book_5.jpg';
import book_6 from '../Assets/book_6.jpg';
import book_7 from '../Assets/book_7.png';
import book_9 from '../Assets/book_9.jpg';
import book_10 from '../Assets/book_10.png';
import book_12 from '../Assets/book_12.png';
import book_13 from '../Assets/book_13.png';

const NewArrivals = () => {
    const item = [book_4, book_5, book_6, book_7, book_9, book_10, book_12, book_13];
    const itemElements = [];

    for(let i=0; i< item.length;i++){
        itemElements.push(
            <div className='images'>
        <img key={i}
            src={item[i]}
            alt={`New Arrival ${i + 1}`} />
            <button>Add To Cart</button>
            </div>
            );
    }
  return (
    <div className='newArrivals'>
      <div className='topic'>
      <h3>New Arrivals</h3>
      </div>
      <div className='box'>
      {itemElements}
      </div>
    </div>
  )
}

export default NewArrivals
