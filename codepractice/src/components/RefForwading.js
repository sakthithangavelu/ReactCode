import React from 'react'

const RefForwading = React.forwardRef((props, ref) => {   //arrow functon is passed as a parameter to React.forward()

    return (<div>
        <input type="text" ref={ref}/>
    </div>)
}
)
export default RefForwading