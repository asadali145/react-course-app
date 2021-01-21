import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'
import Navbar from './Components/Navbar/Navbar'

class App extends Component {
  StartData = [
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
  ]
  state = {
    persons: [...this.StartData],
    showPersons: true
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

  searchHandler = e => {
    const persons = [...this.state.persons].filter(person => person.name.startsWith(e.target.value));
    if (e.target.value === '') {
      this.setState({
        persons: [...this.StartData]
      })
    } else {
      this.setState({
        persons: persons
      })
    }
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
        <Navbar changed={this.searchHandler}/>
        <div className='main-div'>
          <div className='persons'>
            {persons}
            <button type="button" className="btn btn-success" onClick={this.onClickHandler}>Toggle Persons</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
