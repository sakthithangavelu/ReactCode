import React from 'react'

function EventHandling() {

  function ClickEvent()
  {
    return alert("You have clicked the button")
  }
  return (
    <div>
      <h1>Event Handling</h1>
        <button onClick={ClickEvent}>click</button>
   </div>
  )
}

export default EventHandling