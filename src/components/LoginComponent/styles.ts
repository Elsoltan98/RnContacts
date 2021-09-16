import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  logo: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
  titleContainer: {},
  title: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 10,
  },
  footer: {flexDirection: 'row'},
  new: {fontSize: 17},
  register: {fontSize: 17, color: colors.primary, paddingLeft: 5},
});
