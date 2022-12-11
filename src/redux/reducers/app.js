import * as constants from '../constants';

const initialState = {
  cart: [],
  favorites: [],
  username: '',
  password: '',

  userInfo: {},

  loginStatus: false,
  loginLoading: false,
  error: {
    message: '',
    state: false,
  },

  products: {
    list: [],
    limit: 0,
    total: 0,
    skip: 0,
  },

  product: {},
};

export const app = (state = initialState, {type, payload, key, value}) => {
  switch (type) {
    case constants.SET_APP: {
      return {...state, [key]: value};
    }

    case constants.REQUEST_LOGIN_USER_WITH_FB:
    case constants.REQUEST_CREATE_USER_WITH_FB:
    case constants.REQUEST_LOGIN: {
      return {
        ...state,
        password: undefined,
        userInfo: payload.userInfo,
        loginStatus: true,
        error: payload.error,
      };
    }

    case constants.REQUEST_LOGIN_ERROR: {
      console.log('PAYLOAD =>', payload.error);
      return {
        ...state,
        error: payload.error,
      };
    }

    case constants.REQUEST_LOGOUT_USER_WITH_FB: {
      return {
        ...state,
        loginStatus: false,
      };
    }

    case constants.REQUEST_GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: {
          limit: payload.limit,
          total: payload.total,
          skip: payload.skip,
          list: payload.products,
        },
      };
    }

    case constants.REQUEST_GET_PRODUCT_WITH_ID: {
      return {
        ...state,
        product: payload,
      };
    }

    case constants.REQUEST_GET_PRODUCTS_FB: {
      return {
        ...state,
        cart: payload,
      };
    }

    case constants.FIREBASE_PRODUCTS_LISTENER: {
      return {
        ...state,
      };
    }

    case constants.REQUEST_GET_FAVORITES_FB: {
      return {
        ...state,
        favorites: payload,
      };
    }

    case constants.FIREBASE_FAVORITES_LISTENER: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
