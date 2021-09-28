import React, {FC} from 'react';
import {Text, View} from 'react-native';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';

interface Prop {
  visible: boolean;
  setVisible?: any;
}

const ContactsComponent: FC<Prop> = ({visible, setVisible}) => {
  return (
    <View>
      <AppModal
        visible={visible}
        setVisible={setVisible}
        title="Profile"
        ViewBody={<Text>Hello from Modal</Text>}
        ViewFooter={<></>}
      />
      <CustomButton
        title="Open Modal"
        onSubmit={() => setVisible(true)}
        danger
      />
    </View>
  );
};

export default ContactsComponent;
