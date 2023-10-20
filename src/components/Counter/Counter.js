import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as counterActionCreators from '../../store/slices/counterSlice';
import styles from './Counter.module.scss'
import { bindActionCreators } from '@reduxjs/toolkit';
import { translations } from '../../utils/translations';

const Counter = () => {
    
    const language = useSelector((state) => state.lang);
    const { count, step } = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const actionCreators = bindActionCreators(
        {...counterActionCreators}, 
        dispatch
    );
    const { setStep, increment, decrement } = actionCreators;

    const tranclation = translations.get(language);
    const { countText, stepText, incrementText, decrementText} = tranclation;

    return (
        <div className={styles.counter}>

            <br/>

            <p>{countText}: {count}</p>
            <p>{stepText}: {step}</p>
            <button onClick={() => increment()}>{incrementText}</button>
            <button onClick={() => decrement()}>{decrementText}</button>
            <label>
                {stepText}:
                <input 
                    type='number' 
                    value={step}
                    onChange={({target: {value}}) => setStep(value)}
                />
            </label>
            
        </div>
    );
}

// function mapStateToProps(state) {
//     return {
//         ...state.counter,
//         language: state.lang,
//         theme: state.theme
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         incrementCb: () => dispatch(increment()),
//         decrementCb: () => dispatch(decrement()),
//         setStepCb: ({target: {value}}) => dispatch(setStep(value)),
//         setLangCb: ({target: {value}}) => dispatch(setLang(value))
//     }
// }

// const mapDispatchToProps = {
//     increment,
//     decrement,
//     setStep
// }

// const withState = connect(mapStateToProps);

// const counterWithState = withState(Counter);

export default Counter;
