import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  line: {
    height: 0.5,
    backgroundColor: colors.grey,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 16,
    marginTop: 5,
    color: colors.grey,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
