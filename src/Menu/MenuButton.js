import React from "react"
import Button from "../Button"
import {StatusContext} from "./Menu"


export default function MenuButton({ children}) {

    const value = React.useContext(StatusContext)

    return (
        <Button type="Danger" onClick={value.toggle}>{children}</Button>
    )
}