import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AppModal from '../common/AppModal';

interface Prop {
  visible: boolean;
  setVisible?: any;
}

const ContactsComponent: FC<Prop> = ({visible, setVisible}) => {
  const renderItem = () => {
    return (
      <View>
        <Text>Contacts</Text>
      </View>
    );
  };

  return (
    <View>
      <AppModal
        visible={visible}
        setVisible={setVisible}
        title="Profile"
        ViewBody={<Text>Hello from Modal</Text>}
        ViewFooter={<></>}
      />
      <FlatList
        data={[]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ContactsComponent;
