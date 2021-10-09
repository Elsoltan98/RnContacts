import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  floatButton: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  message: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  textMsg: {
    color: colors.white,
    fontSize: 17,
  },
  picture: {
    width: 50,
    height: 50,
  },
  noPicture: {
    width: 50,
    height: 50,
    backgroundColor: colors.grey,
    borderRadius: 100,
    marginRight: 20,
  },
  name: {
    flexDirection: 'row',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
