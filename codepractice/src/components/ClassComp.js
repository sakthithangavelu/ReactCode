import React from "react";

// class ClassComp extends React.Component{
// render(){
//     return <h1>Class Component is been displayed</h1>
//     //return <h1>{this.props.name} from {this.props.city}</h1>  //accessing props in a class using this keyword from props component
// }
// }
/*const {name,city} = this.props   //destructuring props in class comp , same syntax for state also
return <h1>{name} from {city}</h1>*/



//inheriting class

class Sakthi extends React.Component{
    render()
    {
        return (<h1>subclass is displayed</h1>)
    }
}
class ClassComp extends React.Component{
    render(){
        return(
            <div>
        <h2>Main class is working{this.props.Day}</h2>
        <Sakthi/>
        </div>
        )

    }
}

export default ClassComp