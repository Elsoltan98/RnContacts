import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Alert, TouchableOpacity, View} from 'react-native';
import colors from '../../colors';
import Icon from '../../components/common/Icon';
import ContactsDetailsComponent from '../../components/ContactsDetailsComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {GlobalContext} from '../../context/Provider';

const ContactDetails = () => {
  const {setOptions, navigate} = useNavigation();
  const {
    params: {item},
  }: any = useRoute();

  const {
    contacts: {
      deleteContact: {loading},
    },
    contactsDispatch,
  }: any = useContext(GlobalContext);
  const [localFile, setLocalFile] = useState();
  const sheetRef = useRef(null);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onImageSelected = (image: any) => {
    closeSheet();
    setLocalFile(image);
  };

  useEffect(() => {
    if (item) {
      setOptions({
        title: `${item.first_name} ${item.last_name}`,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Icon
                  name={item.is_favorite ? 'star' : 'staro'}
                  size={21}
                  color={colors.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Delete !',
                    `Are you sure you want delete ${item.first_name} ?`,
                    [
                      {
                        text: 'cancel',
                        onPress: () => {},
                      },
                      {
                        text: 'Delete',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACT_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}
                style={{paddingLeft: 10}}>
                {loading ? (
                  <ActivityIndicator size="small" color={colors.primary} />
                ) : (
                  <Icon
                    type="MaterialCommunityIcons"
                    name="delete"
                    size={21}
                    color={colors.primary}
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item]);

  return (
    <ContactsDetailsComponent
      closeSheet={closeSheet}
      openSheet={openSheet}
      localFile={localFile}
      contact={item}
      sheetRef={sheetRef}
      onImageSelected={onImageSelected}
    />
  );
};

export default ContactDetails;
