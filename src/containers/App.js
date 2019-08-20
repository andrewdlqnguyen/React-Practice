import React, { Component } from 'react';
import styleApp from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Max', age: 99 },
      { id: 'a2', name: 'Manu', age: 1},
      { id: 'a3', name: 'Cindy', age: 12}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was Clicked');
  //   // DONT DO THIS: this.state.persons[0].name = 'Andrew';
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
    let persons = null;
    let btnClass = styleApp.Button;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click ={() => this.deletePersonHandler(index)} // alt: {this.deletePersonHandler.bind(this, index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Hayden')}
            changed={this.nameChangedHandler} >My Hobbies: Racing </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
        </div>
      );
      btnClass = styleApp.Button2; //alt: styleApp.Red if in css '.App button.Red' exist
    }

    const classes = [];
    if(this.state.persons.length <=2) {
      classes.push(styleApp.red); //classes array now contains 'red'
    }
    if(this.state.persons.length <= 1) {
      classes.push(styleApp.bold); //classes array now contains 'red' and 'bold'
    }

    return (
        <div className={styleApp.App}>
          <h1> Hi, I'm a React App</h1>
          <p className={classes.join(' ')}> Wow it's working</p>
          <button
            className={btnClass} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
 