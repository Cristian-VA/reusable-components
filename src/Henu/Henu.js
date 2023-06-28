import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import Toggle from "../Toggle/index"


export default function Menu({ children, onOpen }) {

    return (
            <Toggle onToggle={onOpen}>
                  <div className="menu">
                      {children}
                  </div>
            </Toggle>
    )
}
