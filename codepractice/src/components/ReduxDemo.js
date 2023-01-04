import React from 'react'
import {configureStore} from '@reduxjs/toolkit'

function ReduxDemo() {


    //Selectors
    const Development = "Development" ;
    const Testing = "Testing";

    //Actions
    const action1 = () => ({type : Development })
    const action2 = () => ({type : Testing })

    //Reducer
    const reducer1 = (state,action) => {
        switch (action.type) {
            case Development : 
            return state = "LAMP"
                
            case Testing : 
            return state = "AUTOMATION"
                
              
        
            default:
                return state = "Please select option"
        }
    }

    //Store
    let store1 = configureStore(reducer1);
    store1.subscribe(()=> {console.log(store1.getState())});

    store1.dispatch(action2());
    }


export default ReduxDemo