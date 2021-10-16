import storage from '@react-native-firebase/storage';

export default (file: {name: string; path: string}) =>
  (onSuccess: (arg0: string) => void) =>
  (onFaild: (arg0: any) => void) => {
    const path = 'contact-picture/user/777/' + file.creationDate;

    const ref = storage().ref(path);

    const task = ref.putFile(file.path);

    task
      .then(async () => {
        const url = await ref.getDownloadURL();
        onSuccess(url);
      })
      .catch(err => {
        onFaild(err);
      });
  };
