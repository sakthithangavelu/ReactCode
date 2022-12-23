//with jsx

class Hello extends React.Component{
    render(){
        return(<div>With JSX {this.props.name}</div>)
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Hello name="exapmle"/>)


//without jsx
class Hello extends React.Component {
    render() {
      return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
  }
  
  const rooot = ReactDOM.createRoot(document.getElementById('root'));
  rooot.render(React.createElement(Hello, {toWhat: 'World'}, null));