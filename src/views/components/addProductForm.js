import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
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

  handleSubmit(evt) {
    evt.preventDefault();
    // send to database
    window.alert(`You added ${this.state.name}!`);
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
          <input type="file" name="image" value={this.state.image} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add Product" />
      </form>
    );
  }
}

export default Dashboard;
