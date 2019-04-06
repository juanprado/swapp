import React, { Component } from 'react';

import Product from '../components/product';

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
        <ul>
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
