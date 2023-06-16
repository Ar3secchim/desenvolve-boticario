import ITasks from "../../../types/tasks"
import Style  from "../list.module.scss"

interface Props extends ITasks {
  selecTasks : (tasksSelect : ITasks) => void 
}

function Item({nome, time, select, check, id, selecTasks}: Props ){
  return(
    <li className={`
      ${Style.item} 
      ${select ? Style.itemSelect : "" } 
      ${check ? Style.itemCheck : ""}
      `} 
      
      onClick={
        () =>!select && selecTasks({ 
          id, nome, select, check, time
        })
      }
    >
      <div>
        <h3>{nome}</h3>
        <span>{time}</span>
      </div>
      
      {check && <span className={Style.check}></span>}
    </li>
  )
}

export default Item