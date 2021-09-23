import React, {useContext} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/Provider';

const Drawer = createDrawerNavigator();

const getDrawerContent = (
  navigation: DrawerNavigationHelpers,
  authDispatch: any,
) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const {authDispatch}: any = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'slide'}}
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
