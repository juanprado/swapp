import React from 'react';

class UserForm extends React.Component {
  constructor() {
    super();

    this.updateInput = this.updateInput.bind(this);
    this.addUser = this.addUser.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  updateInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser(e) {
    const { firstName, lastName, email } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    onSubmit({ firstName, lastName, email });
  }

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <div>
        <header className="o-user-form__header" />
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
      </div>
    );
  }
}

export default UserForm;
