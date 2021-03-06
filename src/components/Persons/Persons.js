import React, { PureComponent } from "react";
import Person from "./Person/Person";
//purecomponent has built in should component update life cycle method returned as true by default

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor", props);
  }
  componentWillMount() {
    console.log("[Persons.js]fad inside component will mount");
  }
  componentDidMount() {
    console.log("[Persons.js] inside component did mount");
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "[update persons.js] inside component will recieve props",
      nextProps
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[Update persons.js] inside should component update",
  //     nextProps,
  //     nextState
  //   );
  //   return nextProps.persons !== this.props.persons;
  //   //return true;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Update persons.js] inside component will update",
      nextProps,
      nextState
    );
  }
  componentDidUpdate() {
    console.log("[Update persons.js] inside component did update"); //the next props and next state are in current state now
  }
  render() {
    console.log("[Persons.js] inside render");
    return this.props.persons.map((person, index) => {
      //mapping the list of persons into jsx list and returning
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          change={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
