import { setGlobal } from 'reactn';
import formFieldSchema from '../formFieldSchema.json';

const storeInit = () => {
  const formData = {};
  Object.keys(formFieldSchema.fields).forEach((field) => {
    formData[field] = 0;
  });

  setGlobal({
    count: 1,
    formFields: formFieldSchema,
    formData,
  });
};

export default storeInit;
