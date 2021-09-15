import React, {FC} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

interface Props {
  onChangeText: (txt: string) => void;
  text: string;
  label?: string;
  icon?: string;
  style?: {};
}

const Input: FC<Props> = ({onChangeText, text, label, icon, style}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <View style={styles.wrapper}>
        <View>{icon && icon}</View>
        <TextInput style={style} onChangeText={onChangeText} value={text} />
      </View>
    </View>
  );
};

export default Input;
