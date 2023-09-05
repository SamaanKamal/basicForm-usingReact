import {useReducer} from "react";

const defaultInput ={
    value:'',
    isToched:false
};

const inputReducer =(state,action) =>{
    if(action.type==='INPUT')
    {
        return{value:action.value,isToched:state.isToched};
    }
    if(action.type==='BLUR')
    {
        return{value:state.value,isToched:true};
    }
    if(action.type==='RESET')
    {
        return{value:'',isToched:false};
    }

    return defaultInput;
};

const useInput =(validateValue) =>{
    // const [enteredValue,setEnteredValue] = useState('');
    // const [isToched,setIsTouched] = useState(false);
    const [inputState,dispatch] = useReducer(inputReducer,defaultInput)

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isToched;

    const valueChangeHandler = (event)=>{
        // setEnteredValue(event.target.value);
        dispatch({type: 'INPUT', value: event.target.value});
    };
    
    const inputBlurHandler= () =>{
        dispatch({type: 'BLUR'});
        // setIsTouched(true);
    };

    const reset =() =>{
        dispatch({type: 'RESET'});
        // setEnteredValue('');
        // setIsTouched(false);
    };


    return {
        value:inputState.value,
        valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }
};

export default useInput;