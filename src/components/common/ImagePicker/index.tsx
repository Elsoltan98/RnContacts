import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../colors';
import Icon from '../Icon';
import styles from './styles';
import ImagePickerCrop from 'react-native-image-crop-picker';

const ImagePicker = React.forwardRef(({onImageSelected}, ref) => {
  const options = [
    {
      name: 'Take a photo',
      icon: <Icon type="Entypo" name="camera" size={21} color={colors.grey} />,
      onPress: () => {
        ImagePickerCrop.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((image: any) => {
            onImageSelected(image);
          })
          .catch((err: any) => {
            console.log('err', err);
          });
      },
    },
    {
      name: 'Choose from gallery',
      icon: <Icon type="Entypo" name="image" size={21} color={colors.grey} />,
      onPress: () => {
        ImagePickerCrop.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((image: any) => {
            onImageSelected(image);
          })
          .catch((err: any) => {
            console.log('err', err);
          });
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      closeOnDragDown
      height={200}
      openDuration={100}
      customStyles={{
        container: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
      }}>
      <View style={styles.optionsContainer}>
        {options.map(option => {
          return (
            <TouchableOpacity
              onPress={option.onPress}
              style={styles.option}
              key={option.name}>
              {option.icon}
              <Text style={styles.name}>{option.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
