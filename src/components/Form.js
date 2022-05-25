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
          <input type='email' placeholder='Name' className='form__input' />
          <p className='form__error'>This field is required</p>
        </div>
        <div className='form__wrapper'>
          <input
            type='date'
            placeholder='Pick a date'
            className='form__input'
          />
          <p className='form__error'>This field is incomplete</p>
        </div>
        <div className='form__wrapper'>
          <input
            type='time'
            placeholder='Pick a time'
            className='form__input'
          />
          <p className='form__error'>This field is incomplete</p>
        </div>
        <div className='form__wrapper'>
          <button>-</button>
          <p>4 people</p>
          <button>+</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
