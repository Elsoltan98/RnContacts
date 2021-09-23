import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionsType';

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        isLoggedIn: true,
        error: null,
      };
    case LOG_OUT:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        error: null,
        data: null,
      };

    default:
      return state;
  }
};

export default authReducer;
