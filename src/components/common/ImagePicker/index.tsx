import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../colors';
import Icon from '../Icon';
import styles from './styles';

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {
      name: 'Take a photo',
      icon: <Icon type="Entypo" name="camera" size={21} color={colors.grey} />,
      onPress: () => {},
    },
    {
      name: 'Choose from gallery',
      icon: <Icon type="Entypo" name="image" size={21} color={colors.grey} />,
      onPress: () => {},
    },
  ];

  return (
    <RBSheet
      ref={ref}
      closeOnDragDown
      height={250}
      openDuration={150}
      customStyles={{
        container: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
      }}>
      <View style={styles.optionsContainer}>
        {options.map(option => {
          return (
            <TouchableOpacity style={styles.option} key={option.name}>
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
