import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  defaultImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 100,
  },
  choose: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 17,
    paddingVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchText: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
  },
});
