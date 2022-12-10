import database from '@react-native-firebase/database';

export const addFavoriteToFirebase = async (item, uid) => {
  try {
    const ref = database().ref('/favorites').push();
    const key = ref.key;

    await ref.set(item);

    const test = database().ref(`/user_favorites/${uid}`).push();
    await test.set(key);

    const val = {key: test.key};

    return {data: {val}, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const removeFavoriteFromFirebase = async (key, value, uid) => {
  try {
    const userFavorite = database().ref(`/user_favorites/${uid}/${key}`);
    await userFavorite.remove();

    const favorites = database().ref(`/favorites/${value}`);
    await favorites.remove();

    return {data: {}, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const getFavoriteFromFirebase = async key => {
  try {
    const favoritesRef = database().ref('/favorites');
    const item = (await favoritesRef.child(key).once('value')).val();
    return {data: item, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const getAllFavoritesFromFirebase = async uid => {
  try {
    let keys = (
      await database().ref(`/user_favorites/${uid}`).once('value')
    ).val();

    let favoritetKey = keys && Object.keys(keys);
    let favoritetValue = keys && Object.values(keys);

    if (keys !== null) {
      keys = Object.values(keys);
    } else {
    }

    const favorites = [];

    for (let i = 0; i < keys?.length; i++) {
      let deleteFavorite = (await getFavoriteFromFirebase(keys[i])).data;
      favorites.push({
        ...deleteFavorite,
        key: favoritetKey[i],
        value: favoritetValue[i],
      });
    }

    return {data: favorites, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};

export const firebaseFavoritesListener = async (uid, callBack) => {
  if (global.firebaseFavoritesListenerOff) {
    global.firebaseFavoritesListenerOff();
  }

  try {
    const ref = database().ref(`/user_favorites/${uid}`);
    ref.on('value', d => callBack(d.val()));

    global.firebaseFavoritesListenerOff = ref.off;

    return {data: null, success: true};
  } catch (error) {
    console.error(error);
  }

  return {data: null, success: false};
};
