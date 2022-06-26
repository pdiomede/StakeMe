// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Clcik on me!';
}

// Create a React component
/*
const App = function() {
    return <div>Hi there!</div>;
};
*/

// Is it possible to use also this other syntax
const App = () => {

    const buttonText = {text: 'Click Me!'};
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
