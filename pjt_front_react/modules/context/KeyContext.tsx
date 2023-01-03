import React, { useState } from "react";

export const KeyContext = React.createContext({
  key: '',
  addKey: (key: string) => {},
  removeKey: () => {},
});

const defaultKeyState = {
  key: ''
};

export const KeyInfoProvider = (props: any) => {
  const [keyInfoState, setKeyInfoState] = useState(defaultKeyState);

  const addKeyHandler = (key: string) => {
    setKeyInfoState({key: key})
    console.log(keyInfoState)
  }

  const removeKeyHandler = () => {
    setKeyInfoState(defaultKeyState)
  }

  const keyContext =  {
    key: keyInfoState.key,
    addKey: addKeyHandler,
    removeKey: removeKeyHandler
  }

  return (
    <KeyContext.Provider value={keyContext}>
      {props.children}
    </KeyContext.Provider>
  );
};