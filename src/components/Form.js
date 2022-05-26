import { useState } from "react";
import { useInputHook } from "../hooks/inputHook";
import { useEmailHook } from "../hooks/emailHook";
import { useMonthHook } from "../hooks/monthHook";
import { useDayHook } from "../hooks/dayHook";
import { useYearHook } from "../hooks/yearHook";
import { useHourHook } from "../hooks/hourHook";

const Form = () => {
  const [count, setCount] = useState(0);

  const { onNameFocus, onNameChange, onNameBlur, nameError } = useInputHook();
  const { onEmailFocus, onEmailChange, onEmailBlur, emailError } =
    useEmailHook();
  const { onMonthFocus, onMonthBlur, onMonthChange, monthError } =
    useMonthHook();

  const { onDayFocus, onDayBlur, onDayChange, dayError } = useDayHook();
  const { onYearFocus, onYearBlur, onYearChange, yearError } = useYearHook();
  const { onHourFocus, onHourBlur, onHourChange, hourError } = useHourHook();
  const increment = () => {
    setCount((pre) => pre + 1);
  };
  const decrement = () => {
    setCount((pre) => pre - 1);
  };

  return (
    <div className='form__container'>
      <form className='form'>
        <div className='form__wrapper'>
          <input
            type='text'
            placeholder='Name'
            className='form__input'
            onChange={onNameChange}
            onFocus={onNameFocus}
            onBlur={onNameBlur}
          />
          <p className='form__error form__input--error'>{nameError}</p>
        </div>
        <div className='form__wrapper'>
          <input
            type='email'
            placeholder='Email'
            className='form__input'
            onChange={onEmailChange}
            onFocus={onEmailFocus}
            onBlur={onEmailBlur}
          />
          <p className='form__error form__input--error'>{emailError}</p>
        </div>
        <div className='form__datetime'>
          <div className='form__dateInfos'>
            <p className='form__label'>Pick a date</p>
            <p className='form__error'>{monthError || dayError || yearError}</p>
          </div>
          <div className='form__dateInputs'>
            <label htmlFor='month' className='form__dateInputLabel'>
              <input
                id='month'
                type='numeric'
                min='2'
                max='2'
                required
                placeholder='MM'
                className='form__dateinput'
                onChange={onMonthChange}
                onFocus={onMonthFocus}
                onBlur={onMonthBlur}
              />
            </label>
            <label htmlFor='day' className='form__dateInputLabel'>
              <input
                id='day'
                type='numeric'
                min='2'
                max='2'
                required
                placeholder='DD'
                className='form__dateinput'
                onChange={onDayChange}
                onFocus={onDayFocus}
                onBlur={onDayBlur}
              />
            </label>
            <label htmlFor='year' className='form__dateInputLabel'>
              <input
                id='year'
                type='numeric'
                min='4'
                max='4'
                required
                placeholder='YYYY'
                className='form__dateinput'
                onChange={onYearChange}
                onFocus={onYearFocus}
                onBlur={onYearBlur}
              />
            </label>
          </div>
        </div>
        <div className='form__datetime'>
          <div className='form__dateInfos'>
            <p className='form__label'>Pick a time</p>
            <p className='form__error'>{hourError}</p>
          </div>
          <div className='form__dateInputs'>
            <label htmlFor='hour'>
              <input
                id='hour'
                type='numeric'
                min='2'
                max='2'
                required
                placeholder='09'
                className='form__dateinput'
                onChange={onHourChange}
                onFocus={onHourFocus}
                onBlur={onHourBlur}
              />
            </label>
            <label htmlFor='day'>
              <input
                id='month'
                type='numeric'
                min='2'
                max='2'
                required
                placeholder='09'
                className='form__dateinput'
              />
            </label>
            <select className='form__dateInputs'>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>
        <div className='form__cta'>
          <button onClick={decrement}>-</button>
          <p className='form__count'>{count} people</p>
          <button onClick={increment}>+</button>
        </div>
        <button className='btn btn--form'>Make Reservation</button>
      </form>
    </div>
  );
};

export default Form;
