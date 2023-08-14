import { useState } from 'react';

const useForm = (formState: { [index: string]: string }) => {
  const [user, setUser] = useState(formState);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('user', user);
  };

  return {
    user,
    onChangeInput,
    onSubmitForm,
  };
};

export default useForm;
