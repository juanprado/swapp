import React from 'react';
import firebase from '../../config/firebase';

class UserForm extends React.Component {
  constructor() {
    super();

    this.updateInput = this.updateInput.bind(this);
    this.addUser = this.addUser.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  updateInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async addUser(e) {
    const { firstName, lastName, email } = this.state;
    const id = email.split('@')[0];

    e.preventDefault();
    const db = firebase.firestore();

    try {
      const userRef = await db.collection('users').add({
        id,
        name: { first: firstName, last: lastName },
        email
      });

      alert(`user ${userRef.id} created :)`);
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <form onSubmit={this.addUser}>
        <fieldset>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            id="firstName"
            onChange={this.updateInput}
            value={firstName}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            id="lastName"
            onChange={this.updateInput}
            value={lastName}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            id="email"
            onChange={this.updateInput}
            value={email}
          />
        </fieldset>
        <button type="submit">Create New User</button>
      </form>
    );
  }
}

export default UserForm;
