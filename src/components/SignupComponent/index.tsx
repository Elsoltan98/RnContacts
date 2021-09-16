import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {LOG_IN} from '../../constants/routeNames';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';

interface Props {
  form: {};
  errors: {};
  onChange: ({name, value}) => void;
  onSubmit: () => void;
}

const SignupComponent: FC<Props> = ({form, errors, onChange, onSubmit}) => {
  const {navigate} = useNavigation();
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
        error={errors.userName}
      />
      <Input
        label="First name"
        placeholder="Enter first name"
        onChangeText={(value: string) => onChange({name: 'firstName', value})}
        error={errors.firstName}
      />
      <Input
        label="Last name"
        placeholder="Enter last name"
        onChangeText={(value: string) => onChange({name: 'lastName', value})}
        error={errors.lastName}
      />
      <Input
        label="Email"
        placeholder="Enter Email"
        onChangeText={(value: string) => onChange({name: 'email', value})}
        error={errors.email}
      />
      <Input
        label="Password"
        icon={<Text>Show</Text>}
        iconPosition="right"
        placeholder="Enter Password"
        onChangeText={(value: string | number) =>
          onChange({name: 'password', value})
        }
        error={errors.password}
        secureTextEntry
      />

      <CustomButton title="Submit" primary onSubmit={onSubmit} />
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
