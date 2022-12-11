import database from '@react-native-firebase/database';

import endpoints from './endpoints';
import {get} from './service';

export const getAllProducts = async () => {
  let responseObj = await get(endpoints.products);

  return responseObj;
};

export const getProductWithId = async productId => {
  let responseObj = await get(`${endpoints.products}/${productId}`);

  return responseObj;
};

export const addProductToFirebase = async (item, uid) => {
  try {
    const ref = database().ref('/products').push();
    const key = ref.key;
    const itemWithQty = {...item, quantity: 1};
    await ref.set(itemWithQty);

    // await database().ref(`/user_products/${uid}`).push().set(key);
    const test = database().ref(`/user_products/${uid}`).push();
    await test.set(key);

    const val = {key: test.key};

    return {data: {val}, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const updateProductToFirebase = async (value, qty) => {
  try {
    await database().ref(`/products/${value}`).update({quantity: qty});

    return {data: {}, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const removeProductFromFirebase = async (key, value, uid) => {
  try {
    const userProduct = database().ref(`/user_products/${uid}/${key}`);
    await userProduct.remove();

    const products = database().ref(`/products/${value}`);
    await products.remove();

    return {data: {}, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const clearCartFromFirebase = async uid => {
  try {
    const userProduct = database().ref(`/user_products/${uid}`);
    await userProduct.remove();

    return {data: {}, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const getPRoductFromFirebase = async key => {
  try {
    const productsRef = database().ref('/products');
    const item = (await productsRef.child(key).once('value')).val();
    return {data: item, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const getAllPRoductsFromFirebase = async uid => {
  try {
    let keys = (
      await database().ref(`/user_products/${uid}`).once('value')
    ).val();

    let productKey = keys && Object.keys(keys);
    let productValue = keys && Object.values(keys);

    if (keys !== null) {
      keys = Object.values(keys);
    } else {
    }

    const products = [];

    for (let i = 0; i < keys?.length; i++) {
      let deleteProduct = (await getPRoductFromFirebase(keys[i])).data;
      products.push({
        ...deleteProduct,
        key: productKey[i],
        value: productValue[i],
      });
    }

    return {data: products, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const firebaseProductsListener = async (uid, callBack) => {
  if (global.firebaseProductsListenerOff) {
    global.firebaseProductsListenerOff();
  }

  try {
    const ref = database().ref(`/user_products/${uid}`);
    ref.on('value', d => callBack(d.val()));

    global.firebaseProductsListenerOff = ref.off;

    return {data: null, success: true, off: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false, off: false};
};
