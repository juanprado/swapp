import React, { Component } from 'react';
import firebase from '../../config/firebase';

import AddProductForm from '../components/addProductForm';
import Product from '../components/product';

const db = firebase.firestore();

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const { userId } = this.props.match.params;

    if (userId) {
      this.getUserData(userId);
      this.onDbUpdate(userId);
    }
  }

  onDbUpdate(userId) {
    db.collection('users').doc(userId).onSnapshot((doc) => {
      const user = doc.data();
      this.setState({ user });
    });
  }

  async getUserData(userId) {
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
    const { userId } = this.props.match.params;

    if (!user) { return null; }

    return (
      <div>
        <h2>My User Info</h2>
        <ul className="o-user-information">
          <li>{user.name.first} {user.name.last}</li>
          <li>{user.email}</li>
        </ul>
        <AddProductForm userId={userId} />
        <h2>My Products To Share</h2>
        <ul className="o-product-list">
          {user.products && user.products.map((product, id) => (
            <li key={`fashion-${id}`}>
              <Product {...product} />
            </li>))
          }
        </ul>
      </div>
    );
  }
}

export default Dashboard;
