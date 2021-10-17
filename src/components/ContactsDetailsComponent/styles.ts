import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  names: {
    fontSize: 17,
    fontWeight: '600',
    paddingVertical: 20,
    textAlign: 'center',
  },
  line: {
    height: 0.5,
    backgroundColor: colors.grey,
  },
  iconsContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 15,
    marginTop: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  skypeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
});
