import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import uploadImages from '../../helpers/uploadImages';
import {FormInputs} from '../Register';

const CreateContact = () => {
  const {navigate}: any = useNavigation();
  const [form, setForm] = useState<FormInputs>({});
  const [uploading, setUploading] = useState(false);
  const [localFile, setLocalFile] = useState();
  const onChangeText = ({name, value}: any) => {
    setForm({...form, [name]: value});
  };

  const sheetRef = useRef(null);

  const {
    contactsDispatch,
    contacts: {
      createContacts: {data, error, loading},
    },
  }: any = useContext(GlobalContext);

  const onSubmit = () => {
    if (localFile?.size) {
      setUploading(true);
      uploadImages(localFile)(url => {
        setUploading(false);
        createContact({...form, contactPicture: url})(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      })(err => {
        console.log('err', err);
        setUploading(false);
      });
    }
  };

  const toggleSwitch = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onImageSelected = (image: any) => {
    closeSheet();
    setLocalFile(image);
  };

  return (
    <CreateContactComponent
      form={form}
      setForm={setForm}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
      error={error}
      loading={loading || uploading}
      data={data}
      toggleSwitch={toggleSwitch}
      openSheet={openSheet}
      closeSheet={closeSheet}
      sheetRef={sheetRef}
      onImageSelected={onImageSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
