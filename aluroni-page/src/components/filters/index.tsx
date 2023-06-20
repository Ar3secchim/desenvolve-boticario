import styles from "./filters.module.scss"
import filters from "./filter.json"

import React from "react"
import classNames from "classnames"


type IOption = typeof filters[0]

interface Props{
  filter:number | null
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

function Filters({filter, setFilter}: Props ){

	function selectFilter(option: IOption){
		if (filter === option.id) return setFilter(null)
		return setFilter(option.id)
	}

	return(
		<div className={styles.filter}>

			{filters.map(option =>{
				return(
					<>
						<button
							className={classNames({
								[styles.filter__button] : true,
								[styles["filter__button--active"]]: filter === option.id 
							})}
							key={option.id} 
							onClick={()=> selectFilter(option)}
						>
							{option.label}
						</button>
					</>
				)})
			}
		</div>
	)
}

export default Filters