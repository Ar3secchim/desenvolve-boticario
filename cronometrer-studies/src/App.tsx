import { useState } from "react";

import style from "./app.module.scss"
import Form from "./components/form";
import List from "./components/list";
import Stopwatch from "./components/stopwatch";
import ITasks from "./types/tasks";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([])
  const [select, setSelect] = useState<ITasks>()

  function selectTasks(tasksSelect: ITasks){
    setSelect(tasksSelect)
    setTasks(tasksBefore => tasksBefore.map( task => ({
      ...task,
      select: task.id === tasksSelect.id ? true : false
    })))
  }  
  function finalyTask(){
    if(select){
      setSelect(undefined)
      setTasks(tasksbefore => tasksbefore.map(
        tasks => { if(tasks.id === select.id){
          return{
            ...tasks,
            select: false,
            check: true
          }
        }
        return tasks
      }))
    }
  }

  return (
    <div  className={style.AppStyle}>
      <div className={style.form}>
        <Form setTasks={setTasks} />
        <Stopwatch select={select} finalyTask={finalyTask}/>
      </div>
      
      <List 
        tasks={tasks}
        selecTasks ={selectTasks}  
      />

    </div>
  );
}

export default App
