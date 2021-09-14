import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function Contacts() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contacts Screen</Text>
    </View>
  );
}

function CreateContact() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Create Contact Screen</Text>
    </View>
  );
}

function ContactDetails() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contact Details Screen</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Create Contact" component={CreateContact} />
      <Stack.Screen name="Contact Details" component={ContactDetails} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
