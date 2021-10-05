import React from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

const CreateContactComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.defaultImage} />
      <Text style={styles.choose}>Choose photo</Text>
      <Input
        label="First name"
        placeholder="Enter first name"
        onChangeText={() => {}}
      />
      <Input
        label="Last name"
        placeholder="Enter last name"
        onChangeText={() => {}}
      />
      <Input
        label="Phone number"
        placeholder="Enter phone number"
        onChangeText={() => {}}
        icon={
          <CountryPicker
            countryCode="EG"
            withFilter
            withFlag
            withCountryNameButton={false}
            withEmoji
            onSelect={() => {}}
          />
        }
        iconPosition="left"
      />
      <CustomButton title="Submit" onSubmit={() => {}} primary />
    </View>
  );
};

export default CreateContactComponent;
