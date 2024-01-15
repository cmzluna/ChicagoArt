import Toast from "react-native-toast-message";

export const showToast = (message, type = "success", position = "top") => {
  Toast.show({
    type,
    text1: message,
    bottomOffset: 20,
    position,
    visibilityTime: 3000,
  });
};
