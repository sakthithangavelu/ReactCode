//with ES6

class Greetings extends React.Component{
    render(){
        return(
            <h1>React with Es6</h1>
        )
    }
}

//without es6
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});