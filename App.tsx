/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';

import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
