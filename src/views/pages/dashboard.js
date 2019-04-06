import React, { Component } from 'react';
import firebase from '../../config/firebase';

import AddProductForm from '../components/addProductForm';
import Product from '../components/product';

// const user = {
//   name: 'Cher',
//   email: 'cher@hotmail.com'
// };

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

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    // load products
    const userId = this.props.match.params.userId;
    

    if (userId) {
      this.getUserData(userId);
    }
  }

  async getUserData(userId) {
    const db = firebase.firestore();

    try {
      const response = await db.collection('users').doc(userId).get();
      const user = await response.data();

      this.setState({ user });
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { user } = this.state;

    if (!user) { return null; }

    return (
      <div>
        <h2>My User Info</h2>
        <ul className="o-user-information">
          <li>{user.name.first} {user.name.last}</li>
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
