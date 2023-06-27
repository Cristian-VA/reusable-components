import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components"
import {FaRegUser} from "react-icons/fa6"



const StyledDiv = styled.div`
${({src, }) =>{
        
  if (src){
      return  (
          `
            background-image: url(${src});
            background-size: cover;
            border: 1px solid #047857;
          `
          )
  } //else if (!src && !notAnon){

 // }
}}

background : ${({color})=>{
  return `${color}`
}};

width:70px;
height:70px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
color:white;
`

export default function Button(props) {
    console.log(props)

const isAnon = !props.children && !props.src?  <FaRegUser className="w-10 h-10 text-white" /> : props.children

  
  return (
   <StyledDiv color={props.color} src={props.src}>{isAnon}</StyledDiv>
  )
}

