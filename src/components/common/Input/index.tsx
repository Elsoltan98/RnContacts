import React, {FC} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

interface Props {
  onChangeText: (txt: string) => void;
  text: string;
  label: string;
}

const Input: FC<Props> = ({onChangeText, text, label}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

export default Input;
