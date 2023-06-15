import React from "react";
import {v4 as uuidv4 } from 'uuid'

import Button from "../button";
import Style from "./form.module.scss"

import ITasks from "../../types/tasks";

class Form extends React.Component<{ 
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
  }>
  {
  state ={
    nome: "",
    time: "00:00"
  }

  addTasks(event: React.FormEvent){
    event.preventDefault() 
    this.props.setTasks(tasksBefore => [...tasksBefore, {
      ...this.state, 
      select: false, 
      check: false, 
      id: uuidv4()
    }])
    this.setState({
      nome: "",
      time: "00:00"
    })
  } 

  render(): React.ReactNode{
    return(
      <form className={Style.newTasks} onSubmit={this.addTasks.bind(this)}>
        <div className={Style.inputContainer} >
          <label htmlFor="nameStudies">Adicione um estudo</label>
          <input
            type="text" 
            name="nome" 
            id="tasks"
            value={this.state.nome}
            onChange={event => this.setState({...this.state, nome: event.target.value})}
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
            value={this.state.time}
            onChange={event => this.setState({...this.state, time: event.target.value})}
            required
          />
        </div>

        <Button type="submit" Text="Adicionar" />
      </form>
    )

  }
}

export default Form
