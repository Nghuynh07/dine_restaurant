import { useEffect, useState } from "react";

export const useEmailHook = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailIsFocus, setEmailIsFocus] = useState(false);
  const [emailIsBlurred, setEmailIsBlurred] = useState(true);

  const onEmailFocus = () => {
    setEmailIsFocus(true);
    setEmailIsBlurred(false);
  };

  const onEmailBlur = () => {
    setEmailIsBlurred(false);
    setEmailIsFocus(true);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailIsFocus(true);
  };
  useEffect(() => {
    if (email.trim() === "" && emailIsFocus && !emailIsBlurred) {
      setEmailError("This field is required");
    } else {
      setEmailError("");
    }
  }, [email, emailIsFocus, emailIsBlurred]);
  return {
    onEmailFocus,
    onEmailChange,
    onEmailBlur,
    emailError,
  };
};
