import React from "react"
import Button from "../Button"

export default function MenuButton({ buttonText, onClick }) {
    return (
        <Button type="Danger" onClick={onClick}>{buttonText}</Button>
    )
}