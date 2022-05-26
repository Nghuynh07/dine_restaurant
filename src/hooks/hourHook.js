import { useEffect, useState } from "react";

export const useHourHook = () => {
  const [hour, setHour] = useState("");
  const [hourError, setHourError] = useState("");
  const [hourIsFocused, setHourIsFocused] = useState(false);
  const [hourIsBlurred, setHourIsBlurred] = useState(true);

  const onHourFocus = () => {
    setHourIsFocused(true);
    setHourIsBlurred(false);
  };

  const onHourBlur = () => {
    setHourIsBlurred(false);
    setHourIsFocused(true);
  };
  const onHourChange = (e) => {
    setHour(e.target.value);
    setHourIsFocused(true);
  };
  useEffect(() => {
    if (!hour && hourIsFocused && !hourIsBlurred) {
      setHourError("This field is incomplete");
    } else {
      setHourError("");
    }
  }, [hour, hourIsFocused, hourIsBlurred]);
  return {
    onHourFocus,
    onHourBlur,
    onHourChange,
    hourError,
  };
};
