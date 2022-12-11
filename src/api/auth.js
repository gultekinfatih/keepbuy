import auth from '@react-native-firebase/auth';

import endpoints from './endpoints';
import {post} from './service';

export const login = async (username, password) => {
  let responseObj = await post(
    endpoints.login,
    JSON.stringify({username, password}),
  );

  if (responseObj.success) {
    global.token = responseObj.data.token;
  }

  return responseObj;
};

export const createUserWithFB = async (email, password) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    return {data: response, success: true};
  } catch (error) {
    return {error: error.message, success: false};
  }
};

export const loginUserWithFB = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return {data: response, success: true};
  } catch (error) {
    return {error: error.message, success: false};
  }
};

export const logout = async () => {
  try {
    const response = await auth().signOut();

    return {data: null, status: 200, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, status: 500, success: false};
};
