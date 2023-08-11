export const validateEmail = (inputText: string) => {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputText)) {
    console.log('이메일 틀렸음');
    return false;
  } else {
    console.log('이메일 oo');
    return true;
  }
};

export const validatePassword = (inputText: string) => {
  if (inputText.length < 8) {
    console.log('비번 틀렸음');
    return false;
  } else {
    console.log('비번 ㅇㅇ');
    return true;
  }
};
