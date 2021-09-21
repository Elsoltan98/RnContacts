import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import SideMenu from './SideMenu';

const Drawer = createDrawerNavigator();

const getDrawerContent = (navigation: DrawerNavigationHelpers) => {
  return <SideMenu navigation={navigation} />;
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'slide'}}
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
