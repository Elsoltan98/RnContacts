import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../colors';
import AppModal from '../common/AppModal';
import styles from './styles';

import Icon from '../common/Icon';
import {CREATE_CONTACT} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

interface Prop {
  visible: boolean;
  setVisible?: any;
}

const ContactsComponent: FC<Prop> = ({visible, setVisible}) => {
  const {navigate} = useNavigation();
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

      <TouchableOpacity
        style={styles.floatButton}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon type="AntDesign" name="plus" color={colors.white} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default ContactsComponent;
