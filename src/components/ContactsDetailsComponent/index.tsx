import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
  contact: {
    contact_picture: string | null;
    country_code: string;
    first_name: string;
    id: string | number;
    is_favorite: boolean;
    last_name: string;
    phone_number: string;
  };
}

const ContactsDetailsComponent: FC<Props> = ({contact}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text>{contact.first_name}</Text>
      </View>
    </ScrollView>
  );
};

export default ContactsDetailsComponent;
