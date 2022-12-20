import React from 'react'

function ListRendering() {
    const names = [
        {
            name : "Sakthi",
            bay  : "Hercules",
            skills : "ReactJs",
        },
        {
            name : "Vel",
            bay  : "Hercules",
            skills : "Angular",

        },
        {
            name : "Surya",
            bay  : "Hercules",
            skills : "Vue",
        },
    ]
     
    const nameList = names.map(name => <h3>I am {name.name} from {name.bay} practising {name.skills}</h3>)
    return <h3>{nameList}</h3>
}


export default ListRendering