import {useEffect, useRef, useCallback} from 'react';
import {useFormikContext} from 'formik';
import isEqual from 'react-fast-compare';
import debounce from "lodash.debounce";

const FormikPersist = ({name}) => {
  const {values, setValues} = useFormikContext();
  const prefValuesRef = useRef();

  const onSave = (values) => {
    window.localStorage.setItem(name, JSON.stringify(values));
  };

  const debouncedOnSave = useCallback(debounce(onSave, 300), []);

  useEffect(() => {
    const savedForm = window.localStorage.getItem(name);

    if (savedForm) {
      const parsedForm = JSON.parse(savedForm);

      prefValuesRef.current = parsedForm;
      setValues(parsedForm);
    }
  }, [name, setValues]);

  useEffect(() => {
    if (!isEqual(prefValuesRef.current, values)) {
      debouncedOnSave(values);
    }
  });

  useEffect(() => {
    prefValuesRef.current = values;
  });

  return null;
};

export default FormikPersist;