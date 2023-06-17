import style from './order.module.scss'
import options from './option.json'

function Order(){
  return(
    <button className={style.order}>
      <span></span>
      <div className={style.order__options}>

        {options.map(option =>{
          return(
            <div className={style.order__option} key={option.value}>
              {option.nome}
            </div>
          )
        })}
      </div>
    </button>
  )
}

export default Order