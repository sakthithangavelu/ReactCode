import './App.css';
// import logo from './logo.svg';
// import FunctionalComp from './components/FunctionalComp';
// import ClassComp from './components/ClassComp';
// import Props from './components/props';
// import StateComp from './components/StateComp';
// import Counter from './components/Counter';
// import EventHandling from './components/EventHandling';
// import EventBinding from './components/EventBinding';
// import CondRendering from './components/CondRendering';
// import ListRendering from './components/ListRendering';
// import Forms from './components/Forms';
// import Lifecycle1 from './components/Lifecycle1';
// import { Fragment } from 'react';
// import FragmentDemo from './components/FragmentDemo';
// import Refs from './components/Refs';
// import RefForwading from './components/RefForwading';
// import RefForParent from './components/RefForParent';
//import Portals from './components/Portals';
// import ErrorHandling from './components/ErrorHandling';
// import ErrorBoundary from './components/ErrorBoundary';
// import PureComp from './components/PureComp';
// import RegularComp from './components/RegularComp';
// import ParentComp from './components/ParentComp';
import HocClickCounter from './components/HocClickCounter';
import HocHoverCounter from './components/HocHoverCounter';
import UpdatedComponent from './components/HocWithCounter';
function App() {
  return (
    <div className="App">
         
      <fieldset>
        <HocClickCounter/>
        <HocHoverCounter/>
        <UpdatedComponent/>
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
        <Lifecycle1/>
        <FragmentDemo/>
        <Refs/>
        <RefForParent/>
        <Portals/>
        <ErrorBoundary>
        <ErrorHandling name="joy"/>
        </ErrorBoundary>
        <ParentComp/> 
    
        */}
        </fieldset>
    </div>
  );
}

export default App;
