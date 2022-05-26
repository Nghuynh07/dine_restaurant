import React from "react";

const Form = () => {
  return (
    <div className='form__container'>
      <form className='form'>
        <div className='form__wrapper'>
          <input type='text' placeholder='Name' className='form__input' />
          <p className='form__error'>This field is required</p>
        </div>
        <div className='form__wrapper'>
          <input type='email' placeholder='Email' className='form__input' />
          <p className='form__error'>This field is required</p>
        </div>
        <div className='form__wrapper'>
          <div className='form__infos'>
            <label htmlFor='date' className='form__label'>
              Pick a date
            </label>
            <p className='form__error'>This field is incomplete</p>
          </div>
          <input id='date' type='date' className='form__dateTime' />
        </div>
        <div className='form__wrapper'>
          <div className='form__infos'>
            <label className='form__label' htmlFor='time'>
              Pick a time
            </label>
            <p className='form__error'>This field is incomplete</p>
          </div>
          <input id='time' type='time' className='form__dateTime' />
        </div>
        <div className='form__cta'>
          <button>-</button>
          <p>4 people</p>
          <button>+</button>
        </div>
        <button className='btn'>Make Reservation</button>
      </form>
    </div>
  );
};

export default Form;
