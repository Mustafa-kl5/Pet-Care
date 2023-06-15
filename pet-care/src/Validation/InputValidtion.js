import { toast } from "react-toastify";

export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const isValidPassword = (password) => {
  if (password.length < 6 || password.length > 20) {
    return false;
  }
  if (!/\d/.test(password)) {
    return false;
  }
  if (!/[!@#$%^&*]/.test(password)) {
    return false;
  }
  return true;
};

export const checkStringVariables = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (typeof value === "string" && value.length <= 0) {
        return false;
      }
    }
  }
  return true;
};
export const birthDayValidation = (obj) => {
  if (
    obj.dayOfBirth !== null &&
    obj.monthOfBirth !== null &&
    obj.yearOfBirth !== null &&
    obj.dayOfBirth !== "DD" &&
    obj.monthOfBirth !== "MM" &&
    obj.yearOfBirth !== "YYYY"
  ) {
    return true;
  }

  return false;
};
export const notifyError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const nameValidation = (input) => {
  const minLength = 2;
  const maxLength = 12;
  const length = input.trim().length;
  return length >= minLength && length <= maxLength;
};
export const cityValidation = (input) => {
  if (input === "City") {
    return true;
  }
  return false;
};

export const validationPhoneNumber = (number) => {
  if (
    (number.startsWith("078") ||
      number.startsWith("077") ||
      number.startsWith("079")) &&
    number.length === 10
  ) {
    return true;
  } else {
    return false;
  }
};
