import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {REGISTER} from '../../constants/routeNames';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <Container>
      <Image
        source={require('./../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome Rn Contacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
      </View>
      <Input
        text={text}
        onChangeText={onChangeText}
        label="User Name"
        placeholder="Enter name"
      />
      <Input
        text={number}
        onChangeText={onChangeNumber}
        label="Password"
        icon={<Text>Show</Text>}
        iconPosition="right"
        placeholder="Enter Password"
        secureTextEntry
      />

      <CustomButton title="Submit" primary />
      <View style={styles.footer}>
        <Text style={styles.new}>Need a new account?</Text>
        <TouchableOpacity onPress={() => navigate(REGISTER)}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;
