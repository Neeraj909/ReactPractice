import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { id: 'abc1', name: 'Neeraj', age: 26 },
      { id: 'abc2', name: 'Ankit', age: 26 },
      { id: 'abc3', name: 'Amit', age: 26 },
      { id: 'abc4', name: 'subu', age: 26 },
      { id: 'abc5', name: 'MaMa', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false

  };

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  toggelPersonHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow });
  }
  render() {
    const newStyle = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            })}
        </div>
      );
      newStyle.backgroundColor='red'
    }
    return (
    
      <div className="App">
        <h1>I'm React App</h1>
        <p>this is really working?</p>
        <button
          style={newStyle}
          onClick={this.toggelPersonHandler}>Toggel Persons</button>
        {persons}
      </div>
    )
  };
  
}

export default App;

// state ={
//   persons:[
//     {name:'Neeraj',age: 26},
//     {name:'Ankit',age: 26},
//     {name:'Amit',age: 26},
//     {name:'subu',age: 26},
//     {name:'MaMa',age: 26},
//   ]
// };

// switchNameHandler= () =>{
//   this.setState({persons:[
//     {name:'Divya',age: 26},
//     {name:'Shivani',age: 26},
//     {name:'Priya',age: 26},
//     {name:'Nistha',age: 26},
//     {name:'Maami',age: 26},
//   ]})
// }
{/* <Person name={this.state.persons[0].name}
           age={this.state.persons[0].age}>My Hobbies:cricket</Person>
          
          <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Anisha')}
          changed={this.newChangeHandler}>My Hobbies:sex</Person>
         
          <Person name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My Hobbies:ladkion ka katna</Person>
          
          <Person name={this.state.persons[3].name} 
          age={this.state.persons[3].age}>My Hobbies:Gym</Person>
          
          <Person name={this.state.persons[4].name}
           age={this.state.persons[4].age}>My hobbies:ladkion se katwana</Person> */}
           //switchNameHandler= (newName) =>{
            //     this.setState({persons:[
            //       {name:newName,age: 26},
            //       {name:'Shivani',age: 26},
            //       {name:'Priya',age: 26},
            //       {name:'Nistha',age: 26},
            //       {name:'Maami',age: 26},
            //     ]})
            //   }
           // newChangeHandler = (event) => {
              //   this.setState({
              //     persons: [
              //       { name: 'Divya', age: 26 },
              //       { name: event.target.value, age: 26 },
              //       { name: 'priya', age: 26 },
              //       { name: 'Nistha', age: 26 },
              //       { name: 'Maami', age: 26 },
              //     ]
              //   })
              // }
        