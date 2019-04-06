import React, { Component } from 'react';

import AddProductForm from '../components/addProductForm';
import Product from '../components/product';

const user = {
  name: 'Cher',
  email: 'cher@hotmail.com'
};

const products = [
  { id: 'shirt',
    name: 'shirt',
    description: 'a shirt',
    image: ''
  },
  { id: 'pants',
    name: 'pants',
    description: 'a pants',
    image: ''
  },
  { id: 'shoes',
    name: 'shoes',
    description: 'some shoes',
    image: ''
  }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // load products
  }

  render() {
    return (
      <div>
        <h2>My User Info</h2>
        <ul className="o-user-information">
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ul>
        <AddProductForm />
        <h2>My Products To Share</h2>
        <ul className="o-product-list">
          {products.map(product => (
            <li key={product.id}>
              <Product {...product} />
            </li>))
          }
        </ul>
      </div>
    );
  }
}

export default Dashboard;
