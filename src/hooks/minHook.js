import { useEffect, useState } from "react";

export const useMinHook = () => {
  const [min, setMin] = useState("");
  const [minError, setMinError] = useState("");
  const [minIsFocused, setMinIsFocused] = useState(false);
  const [minIsBlurred, setMinIsBlurred] = useState(true);

  const onMinFocus = () => {
    setMinIsFocused(true);
    setMinIsBlurred(false);
  };

  const onMinBlur = () => {
    setMinIsBlurred(false);
    setMinIsFocused(true);
  };
  const onMinChange = (e) => {
    setMin(e.target.value);
    setMinIsFocused(true);
  };
  useEffect(() => {
    if (!min && minIsFocused && !minIsBlurred) {
      setMinError("This field is incomplete");
    } else {
      setMinError("");
    }
  }, [min, minIsFocused, minIsBlurred]);
  return {
    onMinFocus,
    onMinBlur,
    onMinChange,
    minError,
  };
};
