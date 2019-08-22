import React from 'react';
import stylePerson from './Person.css';

const person = (props) => {
    return (
        <div className={[stylePerson.Person, stylePerson.PseudoHover].join(' ')} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;