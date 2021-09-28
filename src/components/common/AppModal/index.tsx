import React, {FC} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './styles';

interface Prop {
  visible: boolean;
  setVisible?: any;
  title?: string;
  ViewBody?: any;
  ViewFooter?: any;
}

const AppModal: FC<Prop> = ({
  visible,
  setVisible,
  title,
  ViewBody,
  ViewFooter,
}) => {
  return (
    <Modal visible={visible} transparent>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setVisible(false)}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Icon
              type="Ionicons"
              name="close"
              size={21}
              onPress={() => setVisible(false)}
            />
            <Text>{title ? title : 'RnContacts'}</Text>
            <View />
            <View />
            <View />
            <View />
            <View />
          </View>
          <View>{ViewBody}</View>
          <View style={styles.footer}>
            {ViewFooter ? (
              ViewFooter
            ) : (
              <>
                <Text>Privacy policy</Text>
                <View style={styles.dot} />
                <Text>Terms of service</Text>
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
