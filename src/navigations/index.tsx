import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {GlobalContext} from '../context/Provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  const state = useContext(GlobalContext);

  const {
    auth: {isLoggedIn},
  } = state;
  console.log('isLoggedIn=>', isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
