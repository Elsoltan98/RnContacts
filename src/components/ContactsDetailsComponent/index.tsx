import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import ImageComponent from './ImageComponent';
import Icon from '../common/Icon';
import colors from '../../colors';
import CustomButton from '../common/CustomButton';

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
        {contact.contact_picture && (
          <ImageComponent src={contact.contact_picture} />
        )}
        <View>
          <Text
            style={
              styles.names
            }>{`${contact.first_name} ${contact.last_name}`}</Text>
        </View>
        <View style={styles.line} />

        {/* Icons Container */}

        <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <Icon
              type="MaterialIcons"
              name="call"
              size={25}
              color={colors.primary}
            />
            <Text style={styles.iconText}>Call</Text>
          </View>
          <View style={styles.icon}>
            <Icon
              type="MaterialCommunityIcons"
              name="message-text"
              size={25}
              color={colors.primary}
            />
            <Text style={styles.iconText}>Message</Text>
          </View>
          <View style={styles.icon}>
            <Icon
              type="FontAwesome"
              name="video-camera"
              size={25}
              color={colors.primary}
            />
            <Text style={styles.iconText}>Video</Text>
          </View>
        </View>
        <View style={styles.line} />

        {/* Details Container */}

        <View style={styles.details}>
          <Icon
            type="Ionicons"
            name="call-outline"
            size={25}
            color={colors.grey}
          />
          <View>
            <Text>{contact.phone_number}</Text>
            <Text>Mobile</Text>
          </View>
          <Icon
            type="FontAwesome"
            name="video-camera"
            size={25}
            color={colors.primary}
          />
          <Icon
            type="MaterialCommunityIcons"
            name="message-text"
            size={25}
            color={colors.primary}
          />
        </View>
        <View style={styles.line} />

        {/* Skype container */}

        <View style={styles.skypeContainer}>
          <Icon
            name="skype"
            size={25}
            style={{paddingRight: 10}}
            color={colors.primary}
          />
          <Text
            style={{
              fontSize: 15,
            }}>{`Skype to phone ${contact.country_code} ${contact.phone_number}`}</Text>
        </View>
        <View style={styles.line} />

        {/* Edit contact Button */}
        <View style={{padding: 30}}>
          <CustomButton title="Edit Contact" primary onSubmit={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactsDetailsComponent;
