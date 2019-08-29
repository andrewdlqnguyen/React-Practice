import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('UseEffect is being called!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] Cleanup Work useEffect');
        };
    }, []); // [props.persons] useeffect only if person changes. Empty runs first time only.

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup Word 2nd useEffect');
        };
    });
    
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <=2) {
      assignedClasses.push(classes.red); //classes array now contains 'red'
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold); //classes array now contains 'red' and 'bold'
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}> Wow it's working</p>
            <button
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit);