import React from 'react';
import newPerson from './Person.css';

const person = (props) => {

    return (
        <div className={[newPerson.Person, newPerson.PseudoHover].join(' ')} onClick={props.click}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;