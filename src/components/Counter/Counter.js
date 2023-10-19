import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';

const { LANGUAGE: { EN_US, UA_UA, DE_DE} } = CONSTANTS;

const translations = new Map([
    [
        EN_US,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement'
        }
    ],
    [
        UA_UA,
        {
            countText: 'Стан лічильника',
            stepText: 'Крок',
            incrementText: 'Збільшити',
            decrementText: 'Зменшити'
        }
    ]
])

const Counter = (props) => {
    const { count, step, incrementCb, decrementCb, setStepCb, language, setLangCb } = props;

    const tranclation = translations.get(language);
    const { countText, stepText, incrementText, decrementText} = tranclation;

    return (
        <div>
            <select value={language} onChange={setLangCb}>
                <option value={EN_US}>English</option>
                <option value={UA_UA}>Українська</option>
            </select>
            <br/>

            <p>{countText}: {count}</p>
            <p>{stepText}: {step}</p>
            <button onClick={incrementCb}>{incrementText}</button>
            <button onClick={decrementCb}>{decrementText}</button>
            <label>
                {stepText}:
                <input 
                    type='number' 
                    value={step}
                    onChange={setStepCb}
                />
            </label>
            
        </div>
    );
}

function mapStateToProps(state) {
    return {
        ...state.counter,
        language: state.lang
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCb: () => dispatch(increment()),
        decrementCb: () => dispatch(decrement()),
        setStepCb: ({target: {value}}) => dispatch(setStep(value)),
        setLangCb: ({target: {value}}) => dispatch(setLang(value))
    }
}

// const mapDispatchToProps = {
//     increment,
//     decrement,
//     setStep
// }

// const withState = connect(mapStateToProps);

// const counterWithState = withState(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
