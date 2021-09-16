import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const Container: FC<{}> = ({children}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;
