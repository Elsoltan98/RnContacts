import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LOG_IN, REGISTER} from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={LOG_IN} component={Login} />
      <Stack.Screen name={REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
