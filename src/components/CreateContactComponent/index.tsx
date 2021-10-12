import React, {FC} from 'react';
import {Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import {FormInputs} from '../../screens/Register';
import colors from '../../colors';
import ImagePicker from '../common/ImagePicker';

interface Prop {
  form?: FormInputs;
  setForm?: any;
  onChangeText?: any;
  onSubmit?: any;
  loading?: boolean;
  error?: string;
  data?: {};
  toggleSwitch?: () => void;
  sheetRef?: any;
  openSheet?: any;
  closeSheet?: any;
  onImageSelected?: (image: any) => void;
  localFile?: any;
}

const CreateContactComponent: FC<Prop> = ({
  form,
  setForm,
  onSubmit,
  onChangeText,
  loading,
  error,
  toggleSwitch,
  sheetRef,
  openSheet,
  localFile,
  onImageSelected,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
        style={styles.defaultImage}
      />
      <TouchableOpacity onPress={openSheet}>
        <Text style={styles.choose}>Choose photo</Text>
      </TouchableOpacity>
      <Input
        label="First name"
        placeholder="Enter first name"
        onChangeText={value => {
          onChangeText({name: 'firstName', value: value});
        }}
        error={error?.first_name?.[0]}
      />
      <Input
        label="Last name"
        placeholder="Enter last name"
        onChangeText={value => {
          onChangeText({name: 'lastName', value: value});
        }}
        error={error?.last_name?.[0]}
      />
      <Input
        label="Phone number"
        placeholder="Enter phone number"
        error={error?.phone_number?.[0]}
        onChangeText={value => {
          onChangeText({name: 'phoneNumber', value: value});
        }}
        icon={
          <CountryPicker
            withFilter
            withFlag
            countryCode={form?.countryCode || undefined}
            withCallingCodeButton
            withCountryNameButton={false}
            withEmoji
            onSelect={v => {
              const phoneCode = v.callingCode[0];
              const cCode = v.cca2;
              setForm({...form, phoneCode, countryCode: cCode});
            }}
          />
        }
        iconPosition="left"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Add to favorite</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.primary}}
          thumbColor={colors.white}
          ios_backgroundColor="#333"
          onValueChange={toggleSwitch}
          value={form?.isFavorite}
        />
      </View>
      <CustomButton
        title="Submit"
        loading={loading}
        disabled={loading}
        onSubmit={onSubmit}
        primary
      />

      <ImagePicker ref={sheetRef} onImageSelected={onImageSelected} />
    </View>
  );
};

export default CreateContactComponent;
