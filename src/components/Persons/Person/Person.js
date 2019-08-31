import React, {Component} from 'react';
import stylePerson from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');
        return (
            // Missing CSS to the wrapper due to the fact Aux is used without any CSS manipulation
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

export default withClass(Person, stylePerson.Person);