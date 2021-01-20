import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Umar',
        age: 24
      },
      {
        id: 2,
        name: 'Asad',
        age: 23
      },
      {
        id: 3,
        name: 'Saad',
        age: 23
      }
    ],
    showPersons: false
  }

  onClickHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)

    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIdx]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIdx] = person;

    this.setState({
      persons: persons
    })

  }

  render() {
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
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1 className='navbar navbar-expand-lg navbar-dark bg-dark text-white text-center'> I am a React App</h1>
        {persons}
        <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Toggle Persons</button>
      </div>
    );
  }
}

export default App;
