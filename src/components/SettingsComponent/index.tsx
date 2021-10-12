import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

interface Prop {
  options?: [{title: string; subTitle: string; onPress: () => void}];
}

const SettingsComponent: FC<Prop> = ({options}) => {
  return (
    <ScrollView style={styles.container}>
      {options?.map(({title, subTitle, onPress}) => (
        <TouchableOpacity key={title} onPress={onPress}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
          <View style={styles.line} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SettingsComponent;
