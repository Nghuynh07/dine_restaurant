import { useEffect, useState } from "react";

export const useYearHook = () => {
  const [year, setYear] = useState("");
  const [yearError, setYearError] = useState("");
  const [yearIsFocused, setYearIsFocused] = useState(false);
  const [yearIsBlurred, setYearIsBlurred] = useState(true);

  const onYearFocus = () => {
    setYearIsFocused(true);
    setYearIsBlurred(false);
  };

  const onYearBlur = () => {
    setYearIsBlurred(false);
    setYearIsFocused(true);
  };
  const onYearChange = (e) => {
    setYear(e.target.value);
    setYearIsFocused(true);
  };
  useEffect(() => {
    if (!year && yearIsFocused && !yearIsBlurred) {
      setYearError("This field is incomplete");
    } else {
      setYearError("");
    }
  }, [year, yearIsFocused, yearIsBlurred]);
  return {
    onYearFocus,
    onYearBlur,
    onYearChange,
    yearError,
  };
};
