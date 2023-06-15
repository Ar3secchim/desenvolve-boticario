import ITasks from "../../../types/tasks"
import Style  from "../list.module.scss"

function Item({nome, time, select, check, id}: ITasks){
  return(
    <li className={Style.item}>
      <h3>{nome}</h3>
      <span>{time}</span>
    </li>
  )
}

export default Item