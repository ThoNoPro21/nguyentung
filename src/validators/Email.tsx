export const validateEmail = (_:any, value:string) => {
    const specificEmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (value && !specificEmailRegex.test(value)) {
      return Promise.reject(new Error("Email phải là định dạng @gmail.com!"));
    }
    return Promise.resolve();
  };