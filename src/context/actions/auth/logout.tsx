import {LOG_OUT} from '../../../constants/actionsType';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => (dispatch: (arg0: {type: string}) => void) => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');

  return dispatch({
    type: LOG_OUT,
  });
};
