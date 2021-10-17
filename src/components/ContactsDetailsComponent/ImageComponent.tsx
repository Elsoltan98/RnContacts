import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const ImageComponent = ({src}: any) => {
  return (
    <View>
      <Image source={{uri: src}} style={styles.image} />
    </View>
  );
};

export default ImageComponent;
