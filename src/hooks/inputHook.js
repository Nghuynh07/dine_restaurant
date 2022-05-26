import { useEffect, useState } from "react";

export const useInputHook = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameIsFocus, setNameIsFocus] = useState(false);
  const [nameIsBlurred, setNameIsBlurred] = useState(true);

  const onNameFocus = () => {
    setNameIsFocus(true);
    setNameIsBlurred(false);
  };

  const onNameBlur = () => {
    setNameIsBlurred(false);
    setNameIsFocus(true);
  };
  const onNameChange = (e) => {
    setName(e.target.value);
    setNameIsFocus(true);
  };
  useEffect(() => {
    if (name.trim() === "" && nameIsFocus && !nameIsBlurred) {
      setNameError("This field is required");
    } else {
      setNameError("");
    }
    console.log(nameIsFocus);
  }, [name, nameIsFocus, nameIsBlurred]);
  return {
    onNameFocus,
    onNameChange,
    onNameBlur,
    nameError,
  };
};
