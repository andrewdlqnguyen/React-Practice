import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // setTimeout(() => {
    //     alert('UseEffect is being called!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] Cleanup Work useEffect");
    };
  }, []); // [props.persons] useeffect only if person changes. Empty runs first time only.

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup Word 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //classes array now contains 'red'
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //classes array now contains 'red' and 'bold'
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}> Wow it's working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
