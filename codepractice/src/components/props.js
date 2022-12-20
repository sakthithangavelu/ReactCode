import React from "react";

const Props = (props) => 
// const {name,city} = props; destructing props in func comp
(
         <div>
           <h1>Hello {props.name} are you from {props.city}..?</h1> 
           <p>{props.children}</p>
        </div>
        );


export default Props