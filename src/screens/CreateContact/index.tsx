import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import {CONTACT_DETAILS, CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import updateContact from '../../context/actions/contacts/updateContact';
import {GlobalContext} from '../../context/Provider';
import uploadImages from '../../helpers/uploadImages';
import {FormInputs} from '../Register';

const CreateContact = () => {
  const {navigate, setOptions}: any = useNavigation();
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
    if (params?.contact) {
      if (localFile?.size) {
        setUploading(true);
        uploadImages(localFile)(url => {
          setUploading(false);
          updateContact(
            {...form, contactPicture: url},
            params?.contact.id,
          )(contactsDispatch)(item => {
            navigate(CONTACT_DETAILS, {item});
          });
        })(err => {
          setUploading(false);
        });
      } else {
        updateContact(
          {...form, contactPicture: localFile?.path},
          params?.contact.id,
        )(contactsDispatch)(item => {
          navigate(CONTACT_DETAILS, {item});
        });
      }
    } else {
      if (localFile?.size) {
        setUploading(true);
        uploadImages(localFile)(url => {
          setUploading(false);
          createContact({...form, contactPicture: url})(contactsDispatch)(
            () => {
              navigate(CONTACT_LIST);
            },
          );
        })(err => {
          setUploading(false);
        });
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      }
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
  const {params} = useRoute();

  useEffect(() => {
    if (params) {
      setOptions({
        title: 'Update Contact',
      });
      const {
        first_name,
        last_name,
        is_favorite,
        country_code,
        phone_number,
        contact_picture,
      } = params?.contact;
      setForm({
        ...form,
        firstName: first_name,
        lastName: last_name,
        isFavorite: is_favorite,
        countryCode: country_code,
        phoneNumber: phone_number,
      });
      setLocalFile({path: contact_picture});
    }
  }, [params]);

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
