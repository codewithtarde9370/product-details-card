import React from 'react';
import { useParams } from 'react-router-dom';
import cardDetails from '../../data';
import Navbar from '../../components/navbar/navbar';
import './display.css'; // Ensure to add appropriate styles

function Display() {
  const { id } = useParams();
  const selectedShoe = cardDetails.find((shoe) => shoe.id === parseInt(id, 10));

  if (!selectedShoe) {
    return (
      <>
        <Navbar />
        <div className="not-found">
          <h1>Shoe not found</h1>
          <p>The shoe you are looking for does not exist.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="selected-shoe">
        <h1>{selectedShoe.brand}</h1>
        <div className="card-detail">
          <span className="shoe-category">Shoes for women</span>|
          <span className="shoe-description">Lightweight and comfy</span>
        </div>
        <img src={selectedShoe.shoeImg} alt="Shoe" className="shoe-image" />
        <p className="price">{selectedShoe.price}</p>
        <ul className="delivery-details"><span className='list-title'>Delivery Details:</span>
          <li className="offer">{selectedShoe.delivery.offer}</li><br />
          <li className="return">{selectedShoe.delivery.return}</li>
        </ul>
        <ol className="product-details">
          <li><span className='list-title'>Style:</span> {selectedShoe.productDetails.style}</li>
          <li><span className='list-title'>Sole Material:</span> {selectedShoe.productDetails.soleMaterial}</li>
          <li><span className='list-title'>Material Type:</span> {selectedShoe.productDetails.materialType}</li>
          <li><span className='list-title'>Heel Type:</span> {selectedShoe.productDetails.heelType}</li>
          <li><span className='list-title'>Country of Origin:</span> {selectedShoe.productDetails.countryOrigin}</li>
        </ol>
      </div>
    </>
  );
}

export default Display;
