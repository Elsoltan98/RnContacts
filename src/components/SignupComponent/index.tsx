import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {LOG_IN} from '../../constants/routeNames';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';

export interface Errors {
  userName?: string;
  lastName?: string;
  firstName?: string;
  email?: string;
  password?: string;
}

export interface ChaneArg {
  name: string;
  value: string;
}

interface Props {
  form: {};
  errors: Errors;
  onChange: ({}: ChaneArg) => void;
  onSubmit: () => void;
  loading: boolean;
  error: any;
}

const SignupComponent: FC<Props> = ({
  errors,
  onChange,
  onSubmit,
  loading,
  error,
}) => {
  const {navigate}: any = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <Container>
      <Image
        source={require('./../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome Rn Contacts</Text>
        <Text style={styles.subTitle}>Create free account</Text>
      </View>
      <Input
        label="User Name"
        placeholder="Enter name"
        onChangeText={(value: string) => onChange({name: 'userName', value})}
        error={errors.userName || error?.username?.[0]}
      />
      <Input
        label="First name"
        placeholder="Enter first name"
        onChangeText={(value: string) => onChange({name: 'firstName', value})}
        error={errors.firstName || error?.first_name?.[0]}
      />
      <Input
        label="Last name"
        placeholder="Enter last name"
        onChangeText={(value: string) => onChange({name: 'lastName', value})}
        error={errors.lastName || error?.last_name?.[0]}
      />
      <Input
        label="Email"
        placeholder="Enter Email"
        onChangeText={(value: string) => onChange({name: 'email', value})}
        error={errors.email || error?.email?.[0]}
      />
      <Input
        label="Password"
        iconPosition="right"
        placeholder="Enter Password"
        onChangeText={(value: string) => onChange({name: 'password', value})}
        error={errors.password || error?.password?.[0]}
        secureTextEntry={isSecureEntry}
        icon={
          <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        }
      />
      <CustomButton
        title="Submit"
        primary
        onSubmit={onSubmit}
        loading={loading}
        disabled={loading}
      />
      <View style={styles.footer}>
        <Text style={styles.new}>Need a new account?</Text>
        <TouchableOpacity onPress={() => navigate(LOG_IN)}>
          <Text style={styles.register}>Log in</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SignupComponent;
