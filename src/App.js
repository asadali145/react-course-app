import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'umar',
        age: 24
      },
      {
        id: 2,
        name: 'asad',
        age: 23
      },
      {
        id: 3,
        name: 'saad',
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
        {persons}
        <button onClick={this.onClickHandler}>Toggle Persons</button>
      </div>
    );
  }
}

export default App;
