import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from '../../colors';
import Icon from '../../components/common/Icon';
import ContactsDetailsComponent from '../../components/ContactsDetailsComponent';

const ContactDetails = () => {
  const {setOptions} = useNavigation();
  const {
    params: {item},
  }: any = useRoute();

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
              <TouchableOpacity style={{paddingLeft: 10}}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="delete"
                  size={21}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item]);

  return <ContactsDetailsComponent contact={item} />;
};

export default ContactDetails;
