import React, {FC} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../colors';
import styles from './styles';

interface Props {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
  onSubmit: () => void;
}

const CustomButton: FC<Props> = ({
  title,
  loading,
  disabled,
  primary,
  secondary,
  danger,
  onSubmit,
}) => {
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    } else if (danger) {
      return colors.danger;
    } else if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      onPress={onSubmit}
      style={[
        styles.wrapper,
        {backgroundColor: disabled ? colors.grey : getBgColor()},
      ]}>
      <View style={styles.loaderSection}>
        {loading && (
          <ActivityIndicator color={primary ? colors.white : colors.primary} />
        )}
        {title && (
          <Text
            style={{color: disabled ? 'black' : colors.white, paddingLeft: 5}}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
