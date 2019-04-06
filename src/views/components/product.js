import React from 'react';

const Product = ({ name, image, description }) => (
  <div>
    <h1>{name}</h1>
    <img alt={name} src={image} />
    <p>{description}</p>
  </div>
);

export default Product;
