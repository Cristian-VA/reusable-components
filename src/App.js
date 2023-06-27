import React from "react"
import "./style.css"
import Button from "./Button"  
import Avatar from "./Avatar"  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaMoneyBill, FaGoogle } from "react-icons/fa"
import {FaRegUser} from "react-icons/fa6"
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"


export default function App() {
  return (
    <main>
      <Button type="Danger" size="sm" onClick={()=> console.log()}> hello </Button>
      
      <Button type="Success" size="xl"> 
          <FaGoogle className="w-6 h-6 text-blue-700 mr-2" />
          <h1> Log in with google</h1>
      </Button>
     
      <Button type="Warning" size="lg"> btn </Button> 

      <Avatar 
      src="https://cdn.costumewall.com/wp-content/uploads/2017/10/patrick-star.jpg">
      </Avatar>

      <Avatar color="#F49E4C">sad</Avatar>
      <Avatar color="black"></Avatar>

      

      <Menu>  
        <MenuButton buttonText="Sports"/>
        <MenuDropdown items={["Tennis", "Racquetball", "Pickleball", "Squash"]}/>
      </Menu>
    </main>
  )
}
