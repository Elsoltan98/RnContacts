import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';

const Container: FC<{}> = ({children}) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

export default Container;
