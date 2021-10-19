import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Alert, TouchableOpacity, View} from 'react-native';
import colors from '../../colors';
import Icon from '../../components/common/Icon';
import ContactsDetailsComponent from '../../components/ContactsDetailsComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';
import updateContact from '../../context/actions/contacts/updateContact';
import {GlobalContext} from '../../context/Provider';
import uploadImages from '../../helpers/uploadImages';

const ContactDetails = () => {
  const {setOptions, navigate}: any = useNavigation();
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
  const sheetRef: any = useRef(null);
  const [updateing, setUpdateing] = useState(false);
  const [finishUploading, setFinishUploading] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, loading]);

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
    setUpdateing(true);
    const {
      first_name: firstName,
      last_name: lastName,
      country_code: countryCode,
      phone_number: phoneNumber,
      is_favorite: isFavorite,
    } = item;

    uploadImages(image)(url => {
      updateContact(
        {
          firstName,
          lastName,
          countryCode,
          phoneNumber,
          isFavorite,
          contactPicture: url,
        },
        item.id,
      )(contactsDispatch)(item => {
        setUpdateing(false);
        setFinishUploading(true);
      });
    })(err => {
      console.log('err', err);
      setUpdateing(false);
    });
  };

  return (
    <ContactsDetailsComponent
      closeSheet={closeSheet}
      openSheet={openSheet}
      localFile={localFile}
      contact={item}
      sheetRef={sheetRef}
      onImageSelected={onImageSelected}
      updateingPicture={updateing}
      finishUploading={finishUploading}
    />
  );
};

export default ContactDetails;
