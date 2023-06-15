import { useState } from "react";

import style from "./app.module.scss"
import Form from "./components/form";
import List from "./components/list";
import Stopwatch from "./components/stopwatch";
import ITasks from "./types/tasks";

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([])
  
  return (
    <div  className={style.AppStyle}>
      <div className={style.form}>
        <Form setTasks={setTasks} />
        <Stopwatch />
      </div>
      
      <List tasks={tasks}/>

    </div>
  );
}

export default App
