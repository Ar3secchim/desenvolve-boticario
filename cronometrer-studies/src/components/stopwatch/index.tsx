import { useEffect, useState } from "react"

import timeForSeg from "../../common/utils/time"
import ITasks from "../../types/tasks"
import Button from "../button"
import Clock from "./clock"

import Style from "./stopwatch.module.scss"

interface Props {
  select: ITasks | undefined
  finalyTask: ()=> void
}

function Stopwatch({select, finalyTask}: Props){
  const [time, setTime] = useState<number>()

  useEffect(()=>{
    if(select?.time){
      setTime(timeForSeg(select.time))
    }
  }, [select])

  function regressive(counter: number= 0 ) {
    setTimeout(()=>{
      if(counter > 0){
        setTime(counter - 1 )
        return regressive(counter-1)
      }
      finalyTask()
    },1000)
  }

  

  return(
    <div className={Style.stopwatch}>
      <p className={Style.title}>Escolha um card e inicia o cronomêtro</p> 
      
      <div className={Style.clockWrapper}>
        <Clock time ={time} />
      </div>

      <Button Text="Start" onClick={()=>regressive(time)}/>
    </div>
  )
}

export default Stopwatch