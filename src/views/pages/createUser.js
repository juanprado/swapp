import React from 'react';
import firebase from '../../config/firebase';
import UserForm from '../components/userForm';

const createUser = async (user) => {
  const { firstName, lastName, email } = user;
  const id = email.split('@')[0];

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
};

const CreateUser = () => <UserForm onSubmit={createUser} />;

export default CreateUser;
