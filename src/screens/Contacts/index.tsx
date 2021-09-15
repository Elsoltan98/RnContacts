import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Contacts = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <Container>
      <Input text={text} onChangeText={onChangeText} label="User Name" />
    </Container>
  );
};

export default Contacts;
