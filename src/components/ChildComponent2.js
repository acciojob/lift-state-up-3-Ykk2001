import React from 'react'

export default function ChildComponent2(props) {
  return (
    <div style={{backgroundColor:"yellow"}}>
      <h2>Child Component 2</h2>
       <button onClick={()=>props.setSelectedOption("Option 2")}>Option 2</button>
    </div>
  )
}
