import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                key = {person.id}
                click ={() => this.props.clicked(index)} // alt: {this.deletePersonHandler.bind(this, index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}/>
            );
        });
    }
    
};

export default Persons;