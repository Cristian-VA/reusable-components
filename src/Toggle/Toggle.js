import React from "react"

const ToggleContext = React.createContext()

export default function Toggle(props) {
  const [on, setOn] = React.useState(false)
    
  function toggle() {
      setOn(prevOn => !prevOn)
      console.log("works")
  }

  return (
    <ToggleContext.Provider value={{on, toggle}}>
    {props.children}
    </ToggleContext.Provider>
  )

}

export {ToggleContext}

//el children es como quieres que se vea el boton