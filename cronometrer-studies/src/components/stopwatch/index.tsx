import Button from "../button"
import Clock from "./clock"

import Style from "./stopwatch.module.scss"

function Stopwatch(){
  return(
    <div  className={Style.stopwatch}>
      <p className={Style.title}>Escolha um card e inicia o cronomêtro</p>

      <div className={Style.clockWrapper}>
        <Clock />
      </div>

      <Button Text="Start"/>
    </div>
  )
}

export default Stopwatch