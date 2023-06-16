import Style from "./list.module.scss"
import Item from "./item";
import ITasks from "../../types/tasks";

interface Props {
  tasks: ITasks[],
  selecTasks : (tasksSelect : ITasks) => void 
}

function List({tasks, selecTasks} : Props){
  return(
    <aside className={Style.aside}>
      <ul className={Style.listTasks}>
        <h2>
          Estudos do dia 
        </h2>
        
        {tasks.map(item =>(
          <Item selecTasks={selecTasks} {...item} key={item.id}/>
        ))}
      </ul>
    </aside>
  )
}

export default List