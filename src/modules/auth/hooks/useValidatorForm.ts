/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

const useValidatorForm = (validationSuccessfull: any, validate: any): any => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any): void => {
    const {name, value} = e;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (): void => {
    console.log('handleSubmit isSubmitting is ', isSubmitting);
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (
      errors.email.length === 0 &&
      errors.password.length === 0 &&
      isSubmitting
    ) {
      console.log('validationSuccessfull is called');
      validationSuccessfull();
    }
  }, [errors]);

  return {handleChange, handleSubmit, values, errors};
};

export default useValidatorForm;
