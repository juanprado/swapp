import React from 'react';

import firebase from '../../config/firebase';
import UserForm from '../components/userForm';

const CreateUser = (props) => {
  console.log(props)
  const { history } = props;

  const createUser = async (newUser) => {
    const { firstName, lastName, email } = newUser;
    const id = email.split('@')[0];
    const db = firebase.firestore();
    let user;

    try {
      await db.collection('users').doc(id).set({
        name: { first: firstName, last: lastName },
        email
      });

      user = await db.collection('users').doc(id);
      history.push(`/dashboard/${id}`);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <UserForm onSubmit={createUser} />
  );
};

export default CreateUser;
