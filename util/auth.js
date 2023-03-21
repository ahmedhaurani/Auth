import axios from 'axios';

const API_KEY = 'AIzaSyC65QQIoBFnf-1meXh51-PwMohgmYnLG2E';

async function authenticate(mode, username, password) {
  const url = `http://192.168.80.7:5000/api/auth/login`;

  const response = await axios.post(url, {
    username: username,
    password: password,
    //returnSecureToken: true,
  });

  const user = response.data;

  return user;
}



export function createUser(username, password) {
  return authenticate('signUp', username, password);
}

export function login(username, password) {
  return authenticate('signInWithPassword', username, password);
}