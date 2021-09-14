import React, {createContext, useReducer} from 'react';
import authState from './initialState/authState';
import contactsState from './initialState/contactsState';
import authReducer from './reducers/authReducer';
import contactsReducer from './reducers/contactsReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [auth, authDispatch] = useReducer(authReducer, authState);
  const [contacts, contactsDispatch] = useReducer(
    contactsReducer,
    contactsState,
  );

  return (
    <GlobalContext.Provider
      value={{auth, contacts, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
