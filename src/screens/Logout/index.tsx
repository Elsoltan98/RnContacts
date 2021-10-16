import React, {lazy, useContext, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import colors from '../../colors';
import logout from '../../context/actions/auth/logout';
import {GlobalContext} from '../../context/Provider';

const Logout = () => {
  const {authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    logout()(authDispatch);
  }, []);

  return <ActivityIndicator size="large" color={colors.primary} />;
};

export default Logout;
