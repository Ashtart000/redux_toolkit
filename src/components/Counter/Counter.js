import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';

const Counter = (props) => {
    const { count, step, dispatch} = props;

    return (
        <div>
            <p>Count: {count}</p>
            <p>Step: {step}</p>
            <button onClick={props.incrementCb}>Increment</button>
            <button onClick={props.decrementCb}>Decrement</button>
            <label>
                Step:
                <input 
                    type='number' 
                    value={step}
                    onChange={props.setStepCb}
                />
            </label>
            
        </div>
    );
}

function mapStateToProps(state) {
    return state.counter;
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCb: () => dispatch(increment()),
        decrementCb: () => dispatch(decrement()),
        setStepCb: ({target: {value}}) => dispatch(setStep(value))
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
