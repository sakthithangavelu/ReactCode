// import React from "react";

// const hoc = (WrapComp) =>
// {
//     class Hoc extends React.Component{
//         render(){
//             return<WrapComp/>;
//         }
//     }
// }
// return hoc;// console.log(StaticMember.Phrase())
// // console.log(StaticMember.name)

// <Fragment>
// <React.Fragment ><h1>Fr
//         <h1>Fragment Syntax</h1>
// </React.Fragment>

// </Fragment>

function ListComp() {

    const employee =[
        {
            name : "Sakthi"
        },
        {
            name : "Vel"
        },
    ];
    return (
        <div>
            <h1>List components</h1>
            {employee}
        </div>
    )
}