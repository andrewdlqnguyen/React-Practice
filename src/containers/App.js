import React, { Component } from 'react';
import styleApp from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/CockPit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  
  // can be initialized in constructor but this way is more modern.
  state = {
    persons: [
      { id: 'a1', name: 'Max', age: 99 },
      { id: 'a2', name: 'Manu', age: 1},
      { id: 'a3', name: 'Cindy', age: 12}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was Clicked');
  //   // DONT DO THIS: this.state.persons[0].name = 'Andrew';
  //   // DO BELOW:
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 25},
  //       { name: 'Hayden Nguyen', age: 9},
  //       { name: 'Cindy Nguyen', age: 23}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { //p is executed for every element in the erray.
      return p.id === id;
    });
    
    // const person = this.state.persons[personIndex]; better approach below
    // Another alt: const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); // alt: const persons = [...this.state.persons]; more modern
    persons.splice(personIndex, 1); // create new version of array. splicing here, we remove 1 element from the array.
    this.setState({persons: persons}) // sets the state "persons" with the new persons const from here.
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    }

    return (
        <div className={styleApp.App}>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
 