import React, {FC} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
  data: [{}];
  loading: boolean;
}

const ContactsComponent: FC<Prop> = ({visible, setVisible, data, loading}) => {
  const {navigate} = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {item.contact_picture ? (
            <Image
              source={{uri: item.contact_picture}}
              style={styles.picture}
            />
          ) : (
            <View style={styles.noPicture} />
          )}
          <View style={styles.name}>
            <Text>{item.first_name}</Text>
            <Text> {item.last_name}</Text>
          </View>
        </View>
        <Icon name="right" />
      </TouchableOpacity>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.message}>
        <Text style={styles.textMsg}>No Contacts to show</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppModal
        visible={visible}
        setVisible={setVisible}
        title="Profile"
        ViewBody={<Text>Hello from Modal</Text>}
        ViewFooter={<></>}
      />

      {loading && <ActivityIndicator size="large" color={colors.primary} />}

      {!loading && (
        <>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ListEmptyComponent={ListEmptyComponent}
          />

          <TouchableOpacity
            style={styles.floatButton}
            onPress={() => navigate(CREATE_CONTACT)}>
            <Icon type="AntDesign" name="plus" color={colors.white} size={25} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ContactsComponent;
