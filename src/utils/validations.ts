export const validateEmail = (inputText: string) => {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputText)) {
    return false;
  } else {
    return true;
  }
};

export const validatePassword = (inputText: string) => {
  if (inputText.length < 8) {
    return false;
  } else {
    return true;
  }
};
