import React from "react"
import Button from "../Button"

export default function MenuButton({ children, onClick }) {
    return (
        <Button type="Danger" onClick={onClick}>{children}</Button>
    )
}