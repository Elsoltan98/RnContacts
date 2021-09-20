import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionsType';

const authReducer = (state: any, action: any) => {
  switch (action.type) {
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
