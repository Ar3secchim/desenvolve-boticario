import Style from "./list.module.scss"
import Item from "./item";
import ITasks from "../../types/tasks";

function List({tasks} : {tasks : ITasks[]}){
  return(
    <aside className={Style.aside}>
      <ul className={Style.listTasks}>
        <h2>
          Estudos do dia 
        </h2>
        
        {tasks.map((item, index)=>(
          <Item {...item} key={index}/>
        ))}
      </ul>
    </aside>
  )
}

export default List