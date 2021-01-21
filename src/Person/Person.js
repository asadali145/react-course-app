import React from 'react';


const person = (props) => {
    return (
    <div className="card text-white bg-success mb-3">
        <p className="card-text" onClick={props.click}>I am {props.name} and I am {props.age}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;
