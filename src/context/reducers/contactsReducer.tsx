import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  UPDATE_CONTACTS_FAIL,
  UPDATE_CONTACTS_LOADING,
  UPDATE_CONTACTS_SUCCESS,
} from '../../constants/actionsType';

const contactsReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_CONTACTS_LOADING:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: true,
          error: null,
        },
      };
    case UPDATE_CONTACTS_SUCCESS:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          data: state.getContacts.data.map((item: {id: any}) => {
            if (item.id === action.payload.id) {
              return action.payload;
            } else {
              return item;
            }
          }),
          loading: false,
          error: null,
        },
      };

    case UPDATE_CONTACTS_FAIL:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: action.payload,
        },
      };
    case DELETE_CONTACTS_LOADING:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: true,
          error: null,
        },
      };
    case DELETE_CONTACTS_SUCCESS:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: null,
        },

        getContacts: {
          ...state.getContacts,
          data: state.getContacts.data.filter(
            (item: {id: any}) => item.id !== action.payload,
          ),
          loading: false,
          error: null,
        },
      };

    case DELETE_CONTACTS_FAIL:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: action.payload,
        },
      };
    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
          error: null,
        },
      };
    case CREATE_CONTACTS_LOADING:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: true,
          error: null,
        },
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case CREATE_CONTACTS_SUCCESS:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          data: action.payload,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          data: [action.payload, ...state.getContacts.data],
          loading: false,
          error: null,
        },
      };
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: action.payload,
        },
      };
    case CREATE_CONTACTS_FAIL:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default contactsReducer;
