import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOf(props){

  const value = React.useContext(ToggleContext)

  return !value.on ? props.children : null
}