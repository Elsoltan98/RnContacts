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
import {CONTACT_DETAILS, CREATE_CONTACT} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

interface Prop {
  visible: boolean;
  setVisible?: any;
  data: [{}];
  loading: boolean;
  sortBy?: string;
}

const ContactsComponent: FC<Prop> = ({
  visible,
  sortBy,
  setVisible,
  data,
  loading,
}) => {
  const {navigate}: any = useNavigation();
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigate(CONTACT_DETAILS, {item})}>
        <View style={styles.item}>
          {item.contact_picture ? (
            <Image
              source={{uri: item.contact_picture}}
              style={styles.picture}
            />
          ) : (
            <View style={styles.noPicture}>
              <Text style={styles.textName}>{item.first_name[0]}</Text>
              <Text style={styles.textName}>{item.last_name[0]}</Text>
            </View>
          )}
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{item.first_name}</Text>
              <Text style={styles.name}> {item.last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${item.country_code} ${item.phone_number}`}</Text>
          </View>
        </View>
        <Icon name="right" color={colors.grey} size={17} />
      </TouchableOpacity>
    );
  };

  // const ListEmptyComponent = () => {
  //   return (

  //   );
  // };

  return (
    <View style={styles.container}>
      <AppModal
        visible={visible}
        setVisible={setVisible}
        title="Profile"
        ViewBody={<Text>Hello from Modal</Text>}
        ViewFooter={<></>}
      />

      {loading && (
        <ActivityIndicator
          size="large"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          color={colors.primary}
        />
      )}

      {!loading && data.length ? (
        <View>
          <FlatList
            data={
              sortBy
                ? data.sort((a, b) => {
                    if (sortBy === 'First Name') {
                      if (b.first_name > a.first_name) {
                        return -1;
                      } else {
                        return 1;
                      }
                    }
                    if (sortBy === 'Last Name') {
                      if (b.last_name > a.last_name) {
                        return -1;
                      } else {
                        return 1;
                      }
                    }
                  })
                : data
            }
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={styles.line} />}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
          }}>
          <View style={styles.message}>
            <Text style={styles.textMsg}>No Contacts to show</Text>
          </View>
        </View>
      )}
      <TouchableOpacity
        style={styles.floatButton}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon type="AntDesign" name="plus" color={colors.white} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default ContactsComponent;
