import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  floatButton: {
    backgroundColor: colors.primary,
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
    width: '70%',
    backgroundColor: colors.primary,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textMsg: {
    color: colors.white,
    fontSize: 17,
  },
  picture: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 20,
  },
  noPicture: {
    width: 60,
    height: 60,
    backgroundColor: colors.grey,
    borderRadius: 100,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  nameContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 0.5,
    backgroundColor: colors.grey,
  },
  name: {
    fontSize: 18,
  },
  phoneNumber: {
    fontSize: 13,
    opacity: 0.6,
  },
});
