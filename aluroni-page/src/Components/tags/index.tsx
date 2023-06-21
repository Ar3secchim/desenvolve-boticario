import classNames from "classnames"
import style from "./tags.module.scss"
import { Dishes } from "Types/dishes"

function Tags({category, size, serving,price} : Dishes){
	return(
		<div className={style.tags}>
			<div className={classNames({
				[style.tags__type]: true,
				[style[`tags__type__${category.label.toLowerCase()}`]]: true
			})}>
				{category.label}
			</div>

			<div className={style.tags__portion}>
				{size}g
			</div>

			<div className={style.tags__qtdpeople}>
              Serve {serving} pessoa{serving == 1 ? "" : "s"}
			</div>

			<div className={style.tags__value}>
              R$ {price.toFixed(2)}
			</div>
		</div>
	)
}

export default Tags