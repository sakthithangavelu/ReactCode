import React, { Component } from 'react'

export default class RenderProps extends Component {
    render() {
        return (
            <div>
                <h1> Render() Props</h1>
                <ParentRenderProps />
            </div>
        )
    }
}

//child component getting render props
class ChildComponentRender extends Component {
    render() {
        return (
            <div>
                <h2> Child Component</h2>
                {this.props.render()}
            </div>
        )
    }
}

//Parent component sending render props to the child
class ParentRenderProps extends Component {
    render() {
        return (
            <ChildComponentRender //Passing render props to the child component
                render={() => {
                    return (
                        <div>
                            <h3>I am coming from render props @ ParentRenderProps</h3>
                        </div>
                    )
                }}
            />
        )
    }
}


