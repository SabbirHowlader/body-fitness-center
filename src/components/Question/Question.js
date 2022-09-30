import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h5>1. How dose react work?</h5>
            <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike</p>
            <br />
            <h5>2. What is the different props and state?</h5>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            <br />
            <h5>3. What is work off use effect?</h5>
            <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
    );
};

export default Question;