import React, { useState } from "react";
import {v4 as uuidv4 } from 'uuid'

import Button from "../button";
import Style from "./form.module.scss"

import ITasks from "../../types/tasks";

interface Props {
  setTasks :  React.Dispatch<React.SetStateAction<ITasks[]>>
}

function Form({ setTasks }: Props) {
   const [nome, setNome] = useState("")
   const [time, setTime] = useState("00:00")

    function addTasks(event: React.FormEvent){
      event.preventDefault() 
      setTasks(tasksBefore => [...tasksBefore, {
        nome,
        time,
        select: false, 
        check: false, 
        id: uuidv4()
      }])
      setNome("")
      setTime( "00:00")
    } 
    
    return(
      <form className={Style.newTasks} onSubmit={addTasks}>
        <div className={Style.inputContainer} >
          <label htmlFor="nameStudies">Adicione um estudo</label>
          <input
            type="text" 
            name="nome" 
            id="tasks"
            value={nome}
            onChange={event => setNome(event.target.value)}
            required
          />
        </div>

        <div className={Style.inputContainer} >
          <label htmlFor="timeStudy">Tempo do estudo</label>
          <input 
            type="time" 
            step="1" 
            name="timeStudy" 
            id="time"
            min="00:00:00"
            max="01:30:00"
            value={time}
            onChange={event => setNome(event.target.value)}
            required
          />
        </div>

        <Button type="submit" Text="Adicionar" />
      </form>
    )
}

export default Form
