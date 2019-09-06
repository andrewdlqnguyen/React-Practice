import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps');
  //     return state;
  // }

  // New React doesnt require this. Don't really need it
  // componentWillReceiveProps(props) {
  //     console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[Persons.js] shouldComponentUpdate');
  //     if (nextProps.persons !== this.props.persons ||
  //         nextProps.changed !== this.props.changed ||
  //         nextProps.clicked !== this.props.clicked
  //     ) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapcshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot); // can be used to re position user to a page theyre looking at. AJAX would work too but this is neat!
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)} // alt: {this.deletePersonHandler.bind(this, index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
