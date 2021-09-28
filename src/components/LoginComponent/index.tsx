import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../colors';
import {REGISTER} from '../../constants/routeNames';
import {Form} from '../../screens/Register';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import Input from '../common/Input';
import {ChaneArg, Errors} from '../SignupComponent';
import styles from './styles';

interface Props {
  form: Form;
  errors: Errors;
  onChange: ({}: ChaneArg) => void;
  onSubmit: () => void;
  loading: boolean;
  error: any;
  justSignedUp: any;
}

const LoginComponent: FC<Props> = ({
  errors,
  onChange,
  onSubmit,
  loading,
  error,
  form,
  justSignedUp,
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
        <Text style={styles.subTitle}>Please login here</Text>
      </View>
      <View>
        {justSignedUp && (
          <TouchableOpacity style={styles.successMsg}>
            <Text style={{color: colors.white}}>
              Account created successfully
            </Text>
          </TouchableOpacity>
        )}
        {(errors.userName || errors.password || error) && (
          <TouchableOpacity style={styles.errorMsg}>
            <Text style={{color: colors.white}}>
              {error ? error.detail : 'Something wrong ! try again...'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Input
        label="User Name"
        placeholder="Enter name"
        value={form.userName || null}
        onChangeText={(value: string) => onChange({name: 'userName', value})}
        error={errors.userName || error?.username?.[0]}
      />
      <Input
        onChangeText={(value: string) => onChange({name: 'password', value})}
        error={errors.password || error?.password?.[0]}
        label="Password"
        secureTextEntry={isSecureEntry}
        icon={
          <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
            <Icon
              type="Entypo"
              name={isSecureEntry ? 'eye' : 'eye-with-line'}
              size={21}
              color={'#333'}
            />
          </TouchableOpacity>
        }
        iconPosition="right"
        placeholder="Enter Password"
      />

      <CustomButton
        title="Submit"
        primary
        loading={loading}
        onSubmit={onSubmit}
      />
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
