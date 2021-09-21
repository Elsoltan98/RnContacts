import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../colors';
import {REGISTER} from '../../constants/routeNames';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {ChaneArg, Errors} from '../SignupComponent';
import styles from './styles';

interface Props {
  form: {};
  errors: Errors;
  onChange: ({}: ChaneArg) => void;
  onSubmit: () => void;
  loading: boolean;
  error: any;
}

const LoginComponent: FC<Props> = ({
  errors,
  onChange,
  onSubmit,
  loading,
  error,
}) => {
  const {navigate}: any = useNavigation();

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
      {(errors.userName || errors.password || error) && (
        <TouchableOpacity style={styles.errorMsg}>
          <Text style={{color: colors.white}}>
            {error ? error.detail : 'Something wrong ! try again...'}
          </Text>
        </TouchableOpacity>
      )}
      <Input
        label="User Name"
        placeholder="Enter name"
        onChangeText={(value: string) => onChange({name: 'userName', value})}
        error={errors.userName || error?.username?.[0]}
      />
      <Input
        onChangeText={(value: string) => onChange({name: 'password', value})}
        error={errors.password || error?.password?.[0]}
        label="Password"
        icon={<Text>Show</Text>}
        iconPosition="right"
        placeholder="Enter Password"
        secureTextEntry
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
