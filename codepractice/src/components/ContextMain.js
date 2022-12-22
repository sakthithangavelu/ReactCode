import React from "react";

const mainContext = React.createContext();
   
const mainProvider = mainContext.Provider;
const mainConsumer = mainContext.Consumer;


export {mainProvider,mainConsumer}