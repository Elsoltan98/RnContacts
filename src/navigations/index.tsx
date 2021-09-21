import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../context/Provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';
import colors from '../colors';

const AppNavContainer = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAuthLoaded, setAuthLoaded] = useState(false);
  const {
    auth: {isLoggedIn},
  } = useContext(GlobalContext);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {isAuthLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAuthenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator
          color={colors.danger}
          size="large"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      )}
    </>
  );
};

export default AppNavContainer;
