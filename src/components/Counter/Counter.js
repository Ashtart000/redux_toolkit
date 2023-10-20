import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import * as counterActionCreators from '../../store/slices/counterSlice';
import * as langActionCreators from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';
import styles from './Counter.module.scss'
import { bindActionCreators } from '@reduxjs/toolkit';

const { LANGUAGE, LANGUAGE: { EN_US, UA_UA, DE_DE}, THEMES } = CONSTANTS;

const translations = new Map([
    [
        EN_US.VALUE,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement'
        }
    ],
    [
        UA_UA.VALUE,
        {
            countText: 'Стан лічильника',
            stepText: 'Крок',
            incrementText: 'Збільшити',
            decrementText: 'Зменшити'
        }
    ]
])

const Counter = (props) => {
    // const { count, step, incrementCb, decrementCb, setStepCb, language, setLangCb, theme } = props;

    const language = useSelector((state) => state.lang);
    const theme = useSelector((state) => state.theme);
    const { count, step } = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const actionCreators = bindActionCreators(
        {...counterActionCreators, ...langActionCreators}, 
        dispatch
    );
    const { setLang, setStep, increment, decrement } = actionCreators;

    const tranclation = translations.get(language);
    const { countText, stepText, incrementText, decrementText} = tranclation;

    const className = cx(styles.counter, {
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    })

    return (
        <div className={className}>
            <select value={language} onChange={({target: {value}}) => setLang(value)}>
                {/* <option value={EN_US.VALUE}>{EN_US.OPTION_TEXT}</option>
                <option value={UA_UA.VALUE}>{UA_UA.OPTION_TEXT}</option> */}
                {Object.values(LANGUAGE).map((langObj, index) => (
                    <option key={index} value={langObj.VALUE}>{langObj.OPTION_TEXT}</option>
                ))}
            </select>
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
