import React, {Component} from 'react';
//import stylePerson from './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
            // <div className={[stylePerson.Person, stylePerson.PseudoHover].join(' ')} >
            //     <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            //     <p>{this.props.children}</p>
            //     <input type="text" onChange={this.props.changed} value={this.props.name}/>
            // </div>
        );
    }
};

export default Person;