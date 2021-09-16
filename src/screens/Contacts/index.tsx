import React from 'react';
import {Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Contacts = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        text={text}
        onChangeText={onChangeText}
        label="User Name"
        error="This field is required !"
      />
      <Input
        text={text}
        onChangeText={onChangeText}
        label="Password"
        icon={<Text>Hide</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Contacts;
