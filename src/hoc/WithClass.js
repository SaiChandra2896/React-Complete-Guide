import React from "react";

const withClass = props => <div className={props.Class}>{props.children}</div>;
export default withClass;
