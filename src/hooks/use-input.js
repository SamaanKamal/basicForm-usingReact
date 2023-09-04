import {useState} from "react";

const useInput =(validateValue) =>{
    const [enteredValue,setEnteredValue] = useState('');
    const [isToched,setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isToched;

    const valueChangeHandler = (event)=>{
        setEnteredValue(event.target.value);
    };
    
    const inputBlurHandler= () =>{
        setIsTouched(true);
    };

    const reset =() =>{
        setEnteredValue('');
        setIsTouched(false);
    };


    return {
        value:enteredValue,
        valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }
};

export default useInput;