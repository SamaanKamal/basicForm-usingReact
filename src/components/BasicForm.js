import useInput from "../hooks/use-input";

const notEmpty = (value) =>{return value !=='';};
const isEmail = (value) =>{return value.includes('@');};

const BasicForm = (props) => {

  const{ value:enteredFirstName,
    valueIsValid:enteredFirstNameIsValid,
    hasError:firstNameInputHasError,
    valueChangeHandler:firstNameInputHandler,
    inputBlurHandler:firstNameBlurHandler,
    reset:resetFirstNameInput
  } =useInput(notEmpty);

  const{ value:enteredLastName, 
    valueIsValid:enteredLastNameIsValid,
    hasError:lastNameInputHasError,
    valueChangeHandler:lastNameInputHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLastNameInput
  } =useInput(notEmpty);

  const{ value:enteredEmail, 
    valueIsValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailInputChangeHandler,
    inputBlurHandler:emailInputBlurHandler,
    reset:resetEmailInput
  } =useInput(isEmail);

  let formIsValid =false;

  if(enteredFirstNameIsValid && enteredLastNameIsValid &&enteredEmailIsValid)
  {
    formIsValid =true;
  }
  

  const onSubmissionHandler = (event)=>{
    event.preventDefault();

    if(!formIsValid)
    {
      return;
    }
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const firstNameInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';


  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';


  return (
    
    <form onSubmit={onSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameInputHandler} onBlur={firstNameBlurHandler}/>
          {firstNameInputHasError && <p className="error-text">FirstName must not be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameInputHandler} onBlur={lastNameBlurHandler}/>
          {lastNameInputHasError && <p className="error-text">SecondName must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler}/>
        {emailInputHasError && <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className='form-actions'>
        <button disabled ={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
