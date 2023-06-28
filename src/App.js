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
import MenuItem from "./Menu/MenuItem"


import Star from "./Star"
import Toggle from "./Toggle/index"
import Henu from "./Henu/index"

import { BsStar, BsStarFill } from "react-icons/bs"

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash", "Football"]

  const sportsArray = sports.map(sport=>{
    // puedes agregar un Link de react router tmb
    return (
      <MenuItem>
      <a href="#">{sport}</a>
      </MenuItem>
    )
  })
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
        <MenuButton>Sports</MenuButton>
          <MenuDropdown>
            {sportsArray}
          </MenuDropdown>  
      </Menu>







      
        <Henu onOpen={() => console.log("Menu toggled")}>
         <Toggle.Button>
            <Henu.Button>Sports</Henu.Button>
         </Toggle.Button>

          <Toggle.On>
            <Henu.Dropdown>
              <Henu.Item> Football</Henu.Item>
              <Henu.Item> Cricket</Henu.Item>
              <Henu.Item> Softball</Henu.Item>
            </Henu.Dropdown>
          </Toggle.On>
        </Henu>
  
    </main>
  )
}

 //Menu es un div vacio al que se le pasan  Menu button y dropdown como children
 //Henu es utilizando el headless component que es toggle en vez de usando Context como lo es Menu

 //puedes poner crear un componente con todo los toggle para que se vea mejor, copiar y pegar en un solo componente




      // <Toggle onToggle={() => console.log("Toggled")}>
     //   <Toggle.Button>
     //   <Toggle.On><BsStar className="star" /></Toggle.On>
     //   <Toggle.Of><BsStarFill className="star filled" /></Toggle.Of>
     //   </Toggle.Button>
     // </Toggle>
