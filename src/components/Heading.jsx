import React from "react";

function Heading() {
  //let str = prompt("define your headings")
  //return <h1>{str}</h1>;
  const cust = {
    color: "blue",
    border: "2px solid grey",
    fontSize: "40px"
  };
  return <h1 style={cust}> My Favourite Food </h1>;
  // this will replace heading in ReactDom render
}
export default Heading;
