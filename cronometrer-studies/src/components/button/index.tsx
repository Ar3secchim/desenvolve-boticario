import React from "react";
import Style from "./button.module.scss" 



class Button extends React.Component
  <{Text: string, type?: "button" | "reset" | "submit" | undefined}>{
    
  render(): React.ReactNode {
    const {type = "button"} = this.props

      return(
        <button type={type} className={Style.ButtonStyle}>
          {this.props.Text}
        </button >
      )
  }
}

export default Button
