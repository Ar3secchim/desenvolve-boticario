import React from "react";
import Style from "./button.module.scss" 

interface Props{
  Text: string
  type?: "button" | "reset" | "submit" | undefined
  onClick?: () => void
}

function Button ({Text, type, onClick}: Props) {
  return(
    <button onClick={onClick} type={type} className={Style.ButtonStyle}>
      {Text}
    </button >
  )
}
  
export default Button
