import { useContext, useEffect, useReducer, useState } from "react";
import AuthControl from "./Store/auth-control";

const emailReducer = (state, action) => {
    if (action.type === 'INPUT_EMAIL') return { value: action.val, isValid: action.val.includes('@') };
    return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === 'INPUT_PASSWORD') return { value: action.val, isValid: action.val.length > 7 };
    return { value: '', isValid: false };
};



const Form = () => {
    const [emailState, emailDispatch] = useReducer(emailReducer, { value: '', isValid: false });
    const [passwordState, passwordDispatch] = useReducer(passwordReducer, { value: '', isValid: false })
    const [formIsValid, setFormIsValid] = useState(false);
    const ctx = useContext(AuthControl);

    const emailHandler = (e) => {
        emailDispatch({ type: 'INPUT_EMAIL', val: e.target.value })
    }

    const passwordHandler = (e) => {
        passwordDispatch({ type: 'INPUT_PASSWORD', val: e.target.value })
    }

    useEffect(() => {
        const timerHandler = setTimeout(() => {
            console.log("RUNNING....");
            setFormIsValid(emailState.isValid && passwordState.isValid);
        }, 500);
        return () => clearTimeout(timerHandler);
    }, [emailState.isValid, passwordState.isValid])

    const submitHandler = (e) => {
        e.preventDefault();
        ctx.logInHandler();
    };
    return (
        <form className="space-y-3" onSubmit={submitHandler}>
            <label className="block text-lg font-semibold capitalize" htmlFor="email">e-mail</label>
            <input type="email" id="email" className="w-full rounded-lg px-4 py-1 border" placeholder="Insert your email here..." required onChange={emailHandler} value={emailState.value} />
            <label className="block text-lg font-semibold capitalize" htmlFor="password">password</label>
            <input type="password" id="password" className="w-full rounded-lg px-4 py-1 border" placeholder="Insert your password here..." required onChange={passwordHandler} value={passwordState.value} />
            <button className={`${!formIsValid && 'pointer-events-none'} block capitalize text-white bg-purple-900 rounded-xl  px-8 py-2 mx-auto border border-purple-900 hover:text-purple-900 hover:bg-white`}>login</button>
        </form>
    );
};

export default Form;