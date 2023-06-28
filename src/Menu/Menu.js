import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"


const StatusContext = React.createContext()

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(false)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
        console.log("toggled")
    }

    return (
        <StatusContext.Provider value={{open, toggle}}>
       <div className="menu">
                {children}
            </div>
        </StatusContext.Provider>
    )
}

export { StatusContext }