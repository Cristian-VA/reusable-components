import React from "react"
import {StatusContext} from "./Menu"

export default function MenuDropdown({ children }) {
    const value = React.useContext(StatusContext)
    

   return value.open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}