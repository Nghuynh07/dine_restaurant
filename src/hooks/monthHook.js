import { useEffect, useState } from "react";

export const useMonthHook = () => {
  const [month, setMonth] = useState("");
  const [monthError, setMonthError] = useState("");
  const [monthIsFocused, setMonthIsFocused] = useState(false);
  const [monthIsBlurred, setMonthIsBlurred] = useState(true);

  const onMonthFocus = () => {
    setMonthIsFocused(true);
    setMonthIsBlurred(false);
  };

  const onMonthBlur = () => {
    setMonthIsBlurred(false);
    setMonthIsFocused(true);
  };
  const onMonthChange = (e) => {
    setMonth(e.target.value);
    setMonthIsFocused(true);
  };
  useEffect(() => {
    if (!month && monthIsFocused && !monthIsBlurred) {
      setMonthError("This field is incomplete");
    } else {
      setMonthError("");
    }
  }, [month, monthIsFocused, monthIsBlurred]);
  return {
    onMonthFocus,
    onMonthBlur,
    onMonthChange,
    monthError,
  };
};
