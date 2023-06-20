import { useState } from 'react'
import classNames from 'classnames'

import options from './option.json'
import style from './order.module.scss'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md"

interface Pros{
  order: string,
  setOrder: React.Dispatch<React.SetStateAction<string>>
}
function Order({order, setOrder}: Pros){
  const [close, setClose] = useState(true)
  const nameOrder = order && options.find(option => option.value === order)?.nome

  return(
    <button className={classNames({
      [style.order]: true,
      [style["order--active"]]: order !== ""
    })} 
      onClick={()=> setClose(!close)}
      onBlur={()=> setClose(true)}
    >
      <span>{nameOrder || "Ordenar por"}</span>
      {close ? <MdKeyboardArrowDown size={20}/> : <MdKeyboardArrowUp size={20}/>}
      
      <div className={classNames({
        [style.order__options]: true,
        [style["order__options--active"]]: !close
      })}>

        {options.map(option =>{
          return(
            <div className={style.order__option} 
              key={option.value}
              onClick={()=> setOrder(option.value)}
            >
              {option.nome}
            </div>
          )
        })}
      </div>
    </button>
  )
}

export default Order