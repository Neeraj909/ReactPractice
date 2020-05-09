import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import  classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render(){
        return( 
            <Aux>
            <p onClick={this.props.click}>I'm  {this.props.name} and  I'm {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </Aux>
            )
        }
    
};
Person.propTypes={
    click: PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};
export default withClass(Person,classes.Person);