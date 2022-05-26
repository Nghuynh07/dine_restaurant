import { useEffect, useState } from "react";

export const useDayHook = () => {
  const [day, setDay] = useState("");
  const [dayError, setDayError] = useState("");
  const [dayIsFocused, setDayIsFocused] = useState(false);
  const [dayIsBlurred, setDayIsBlurred] = useState(true);

  const onDayFocus = () => {
    setDayIsFocused(true);
    setDayIsBlurred(false);
  };

  const onDayBlur = () => {
    setDayIsBlurred(false);
    setDayIsFocused(true);
  };
  const onDayChange = (e) => {
    setDay(e.target.value);
    setDayIsFocused(true);
  };
  useEffect(() => {
    if (!day && dayIsFocused && !dayIsBlurred) {
      setDayError("This field is incomplete");
    } else {
      setDayError("");
    }
  }, [day, dayIsFocused, dayIsBlurred]);
  return {
    onDayFocus,
    onDayBlur,
    onDayChange,
    dayError,
  };
};
