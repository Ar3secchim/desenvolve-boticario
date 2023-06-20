import menu from "./itens.json" 
import Item from "./item"
import styles from "./itens.module.scss"
import { useEffect, useState } from "react"

interface Props{
  search: string
  filter: number | null
  order: string
}

export default function Itens(props:Props) {
	const [list, setList] = useState(menu)
	const {search, filter, order} = props

	function testSearch(title: string){
		//case insesitive
		const regex = new RegExp(search, "i")
		return regex.test(title)
	}

	function testfilter(id: number ){
		if(filter!== null) return filter === id
		return true
	}

	function orders(newList: typeof menu){
		switch (order) {
		case "porcao":
			return newList.sort((a,b)=> a.size > b.size ? 1 : -1)
		case "qtd_pessoas":
			return newList.sort((a,b)=> a.serving > b.serving ? 1 : -1)
		case "preco":
			return newList.sort((a,b)=> a.price > b.price ? 1 : -1)
		default:
			return newList
		}
	}

	useEffect(()=>{
		const newList = menu.filter(item => testSearch(item.title) && testfilter(item.category.id))
		setList(orders(newList))

	},[search, filter, order])

	return (
		<div className={styles.itens}>
			{list.map(item => (
				<Item key={item.id} {...item}/>
			))}
		</div>
	)
}