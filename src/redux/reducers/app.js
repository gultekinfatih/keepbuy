import * as constants from '../constants';

const initialState = {
  cart: [],
  defaultParameter: false,
  username: 'fatih@example.com',
  password: '123123',

  userInfo: {},

  loginStatus: false,
  loginLoading: false,

  products: [],
};

export const app = (state = initialState, actionObj) => {
  switch (actionObj.type) {
    case constants.SET_APP: {
      return {...state, [actionObj.key]: actionObj.value};
    }
    case constants.REQUEST_LOGIN: {
      return {
        ...state,
        password: undefined,
        userInfo: actionObj.payload.userInfo,
        loginStatus: true,
      };
    }

    case constants.REQUEST_LOGOUT_USER_WITH_FB: {
      console.log('logout reducer');

      return {
        ...state,
        loginStatus: false,
      };
    }

    case constants.REQUEST_GET_ALL_PRODUCTS: {
      return {...state, products: actionObj.payload.products};
    }

    default:
      return state;
  }
};
