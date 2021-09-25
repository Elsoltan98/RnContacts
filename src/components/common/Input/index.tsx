import React, {FC} from 'react';
import {View, TextInput, Text} from 'react-native';
import colors from '../../../colors';
import styles from './styles';

interface Props {
  onChangeText: (txt: string) => void;
  text?: string;
  label?: string;
  icon?: any;
  style?: {};
  iconPosition?: string;
  error?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string | null;
}

const Input: FC<Props> = ({
  onChangeText,
  label,
  icon,
  style,
  iconPosition,
  error,
  placeholder,
  secureTextEntry,
  value,
}) => {
  const [focused, setFocused] = React.useState<boolean | null>(null);
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
    }

    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {flexDirection: getFlexDirection(), borderColor: getBorderError()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[style, styles.textInput]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
