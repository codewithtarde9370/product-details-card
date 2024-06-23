import React from 'react';
import { Link } from 'react-router-dom';
import './shoe-card.css';

function ShoeCard({ id, shoeImg, price }) {
  return (
    <Link className="card-container" to={`/display/${id}`}>
      <img alt="shoe" className="shoe-img" src={shoeImg} />
      <p className='price'>{price}</p>
    </Link>
  );
}

export default ShoeCard;
