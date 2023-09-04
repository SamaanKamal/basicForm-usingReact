import React from "react";
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const{ value:enteredName, valueIsValid:enteredNameIsValid,hasError:nameInputHasError,valueChangeHandler:inputHandler,inputBlurHandler:nameBlurHandler,reset:resetNameInput} =useInput((value)=>{
    return value.trim() !=='';
  });

  const{ value:enteredEmail, valueIsValid:enteredEmailIsValid,hasError:emailInputHasError,valueChangeHandler:emailInputChangeHandler,inputBlurHandler:emailInputBlurHandler,reset:resetEmailInput} =useInput((value)=>{
    return value.includes('@');
  });


  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid)
  {
    formIsValid = true;
  }

  const onSubmissionHandler =(event)=>{
    event.preventDefault();

    if(!enteredName)
    {
      return;
    }
    
    resetNameInput();
    
    resetEmailInput();
  };


  const classes = nameInputHasError ? 'form-control invalid':'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={onSubmissionHandler}>
      <div className={classes}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onBlur={nameBlurHandler} onChange={inputHandler} />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled ={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
