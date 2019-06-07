import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import "./Person.css";
import WithClass from "../../../hoc/WithClass";

let style = {
  display: "inline-block",
  "@media (min-width: 500px)": {
    width: "450px"
  }
};
class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor", props);
  }
  componentWillMount() {
    console.log("[Person.js] inside component will mount");
  }
  componentDidMount() {
    console.log("[Person.js] inside component did mount");
  }
  render() {
    console.log("[Person.js] inside render");
    return (
      <WithClass Class="Person">
        <p onClick={this.props.click} style={style}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default Radium(Person);
