import React from 'react';
import stylePerson from './Person.css';

const person = (props) => {

    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('Something went Wrong');
    }

    return (
        <div className={[stylePerson.Person, stylePerson.PseudoHover].join(' ')} onClick={props.click}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;