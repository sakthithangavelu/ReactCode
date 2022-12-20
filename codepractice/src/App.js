import logo from './logo.svg';
import './App.css';
import FunctionalComp from './components/FunctionalComp';
import ClassComp from './components/ClassComp';
import Props from './components/props';
import StateComp from './components/StateComp';
import Counter from './components/Counter';
import EventHandling from './components/EventHandling';
import EventBinding from './components/EventBinding';
import CondRendering from './components/CondRendering';
import ListRendering from './components/ListRendering';
import Forms from './components/Forms';
import Lifecycle1 from './components/Lifecycle1';

function App() {
  return (
    <div className="App">
      <fieldset>
        <Lifecycle1/>
       {/*
      
      <ClassComp Day= "Sunday"/>
      <h1>Learning ReactJs</h1>
        <FunctionalComp/>
        <ClassComp/>
        <Props name = "Sakthi" city = "Chennai">
        <p>Child props</p></Props>
        <Props name = "Vel"  city = "Kanchipuram">
        <button>Yes</button></Props>
        <ClassComp name = "Sakthi" city = "Chennai"/>
        <ClassComp name = "Vel"  city = "Kanchipuram"/> 
        <StateComp/>
        <Counter/>
        <EventHandling/>
        <EventBinding/>
        <CondRendering/>
        <ListRendering/>
        <Forms/>
        */}
        </fieldset>
    </div>
  );
}

export default App;
