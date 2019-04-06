import React, { Component } from 'react';

import firebase from '../../config/firebase';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      image: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(evt) {
    const db = firebase.firestore();
    const { name, description, image } = this.state;
    const { userId } = this.props;

    evt.preventDefault();

    try {
      await db.collection('users').doc(userId).update({
        products: firebase.firestore.FieldValue.arrayUnion({ name, description, image })
      });
      window.alert(`You added ${name}}!`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <legend>Swapp something--</legend>
        <br />
        <label>Product name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>Product description:
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <label>Product image:
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add Product" />
      </form>
    );
  }
}

export default Dashboard;
