import React from 'react';
import cardDetails from '../../data';
import ShoeCard from '../../components/shoe-card/shoe-card';
import './home.css';

function Home() {
  return (
    <>          <h1 className='heading'>Shoe Cards</h1>

    <div className='cards-cont'>

      {cardDetails.map((obj, index) => {
        const { id, shoeImg, price } = obj;

        return (
          <>
          <ShoeCard
            key={index}
            id={id}
            shoeImg={shoeImg}
            price={price}
          />
          
          </>
        );
      })}
    </div></>
  );
}

export default Home;
