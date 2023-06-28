import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleButtons(props) {
 
const value = React.useContext(ToggleContext)
console.log(value)

  return (
   <div onClick={value.toggle}>
      {props.children}
   </div>
  )

}