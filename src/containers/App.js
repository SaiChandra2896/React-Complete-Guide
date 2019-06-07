import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] inside constructor", props);
    this.state = {
      persons: [
        { id: "asdas", name: "Sai", age: 24 },
        { id: "edwe", name: "Pandu", age: 20 },
        { id: "dcas", name: "Srujan", age: 24 }
      ],
      otherState: "Other",
      showPersons: false
    };
  }
  componentWillMount() {
    console.log("[App.js]inside component will mount");
  }
  componentDidMount() {
    console.log("[App.js]inside component did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[Update App.js] inside should component update",
      nextProps,
      nextState
    );
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Update App.js] inside component will update",
      nextProps,
      nextState
    );
  }
  componentDidUpdate() {
    console.log("[Update App.js] inside component did update"); //the next props and next state are in current state now(this.props and this.state)
  }
  // state = {
  //   persons: [
  //     { id: "asdas", name: "Sai", age: 24 },
  //     { id: "edwe", name: "Pandu", age: 20 },
  //     { id: "dcas", name: "Srujan", age: 24 }
  //   ],
  //   otherState: "Other",
  //   showPersons: false
  // };

  deletePersonHandler = personIndex => {
    //const persons = this.state.slice();
    const persons = [...this.state.persons]; //creating a copy of persons
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    //get the id of person to update
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }; //creating the copy of the person
    person.name = event.target.value; //updating the name

    const persons = [...this.state.persons];
    persons[personIndex] = person; //updating the array

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    console.log("[App.js]inside render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <button onClick={() => this.setState({ showPersons: true })}>
            Show Persons
          </button>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            togglePersons={this.togglePersonsHandler}
            appTitle={this.props.title}
          />
          {persons}
        </div>
        <StyleRoot />
      </StyleRoot>
    );
  }
}

export default Radium(App);
