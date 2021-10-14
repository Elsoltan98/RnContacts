import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';
import styles from './styles';

interface Prop {
  options?: [{title: string; subTitle: string; onPress: () => void}];
  visible?: boolean;
  setVisible?: any;
  sortOptions?: [{name: string; selected: boolean}];
}

const SettingsComponent: FC<Prop> = ({
  options,
  visible,
  sortOptions,
  setVisible,
}) => {
  const ModalBody = () => (
    <View>
      {sortOptions.map(option => {
        return (
          <TouchableOpacity style={styles.sortContainer}>
            <Text>{option.name}</Text>
            {true && <Icon name="check" />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
  return (
    <>
      <AppModal
        visible={visible}
        closeOnTouch={false}
        setVisible={setVisible}
        title="Sort by"
        ViewBody={<ModalBody />}
        ViewFooter={false}
      />
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
    </>
  );
};

export default SettingsComponent;
