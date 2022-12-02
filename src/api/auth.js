import auth from '@react-native-firebase/auth';

export const createUserWithFB = async (email, password) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    return {data: null, status: 200, success: true};
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
  }

  return {data: null, status: 500, success: false};
};

export const loginUserWithFB = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);

    return {data: null, status: 200, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, status: 500, success: false};
};

export const logout = async () => {
  console.log('auth logout');
  try {
    const response = await auth().signOut();

    return {data: null, status: 200, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, status: 500, success: false};
};
