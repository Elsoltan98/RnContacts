import {StyleSheet} from 'react-native';
import colors from '../../../colors';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 5,
  },
  wrapper: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5,
    padding: 5,
  },
  error: {
    color: colors.danger,
    fontSize: 12,
  },
});
