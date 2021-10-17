import {useRoute} from '@react-navigation/native';
import React from 'react';
import ContactsDetailsComponent from '../../components/ContactsDetailsComponent';

const ContactDetails = () => {
  const {
    params: {item},
  }: any = useRoute();

  console.log('item', item);
  return <ContactsDetailsComponent contact={item} />;
};

export default ContactDetails;
