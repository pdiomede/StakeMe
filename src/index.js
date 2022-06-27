// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function getButtonText() {
    return 'Click on me!';
}

// Create a React component
/*
const App = function() {
    return <div>Hi there!</div>;
};
*/

// Is it possible to use also this other syntax
const App = () => {

    return (
        <div className="UI container comments">
        
            <ApprovalCard>            
                <CommentDetail author="Sam"  content="Wow that's cool! I will go for Finland then!" avatarPicture={Faker.image.image()} timeAgo="Today at 4:59PM" />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Alex" content="Why Paris? It is so hot, better Helsinki."    avatarPicture={Faker.image.image()} timeAgo="Today at 2:00AM" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" content="I suggest you to visit Paris this year."      avatarPicture={Faker.image.image()} timeAgo="Yesterday at 5:00PM"  />
            </ApprovalCard>

        </div>
    );

    /*
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
    */
};

// Take the React component and show it on the screen
ReactDOM.render(<App />,document.querySelector('#root'));
