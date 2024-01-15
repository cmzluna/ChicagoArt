import "react-native-gesture-handler";
import React from "react";
import Main from "./src/stacks/Main";
import Toast from "react-native-toast-message";

function App(): React.JSX.Element {
  return (
    <>
      <Main />
      <Toast />
    </>
  );
}

export default App;
