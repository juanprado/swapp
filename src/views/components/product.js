import React from 'react';

const Product = ({ name, image, description }) => (
  <div>
    <h3>{name}</h3>
    <img alt={name} src={image} />
    <p>{description}</p>
  </div>
);

export default Product;
