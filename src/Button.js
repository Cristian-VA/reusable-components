import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components"




const StyledButton = styled.button`
    ${({type}) =>{
        
        if (type==="Success"){
            return  (
                `
                background: #ECFDF5;
                color: #047857;
                border: 1px solid #047857;
                `
                )
                
        } else if(type ==="Warning"){
            return (
                `
                background: #FFFBEB;
                color: #FBBF24;
                border: 1px solid #FBBF24;
                `
                )
                
        } else if (type ==="Danger"){
            return (
                `
                background: #FEF2F2;
                color: #F87171;
                border: 1px solid #F87171;
                `
                )
        }
    }};
    font-size: ${({size}) => {
        if (size=== "sm"){
          return "12px "
        } else if(size=== "lg"){
         return "15px "
        } else if(size=== "xl"){
          return "18px" 
        }
      }};
  
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    font-weight: 700;
    border-radius: 6px;
    line-height: 24px;
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 0.4em 0.8em
`

export default function Button(props) {
   
  return (
   <StyledButton size={props.size} type={props.type} onClick={props.onClick}>{props.children}</StyledButton>
  )
}

//https://react-icons.github.io/react-icons
// type={props.type} onClick={props.onClick} =  {...props} y le pone el mismo valor
// 