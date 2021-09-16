import React, {FC} from 'react';
import {View, TextInput, Text} from 'react-native';
import colors from '../../../colors';
import styles from './styles';

interface Props {
  onChangeText: (txt: string) => void;
  text: string;
  label?: string;
  icon?: any;
  style?: {};
  iconPosition?: string;
  error?: string;
}

const Input: FC<Props> = ({
  onChangeText,
  text,
  label,
  icon,
  style,
  iconPosition,
  error,
}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderError = () => {
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {flexDirection: getFlexDirection(), borderColor: getBorderError()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[style, styles.textInput]}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
