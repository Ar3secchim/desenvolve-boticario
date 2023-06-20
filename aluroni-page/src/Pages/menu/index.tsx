import { useState } from "react"

import styles from "./menu.module.scss"
import styleTema from "../../Styles/tema.module.scss"

import SearchEngine from "Pages/menu/search"
import Filters from "./filters/index"
import Order from "./order/index"
import Itens from "./itens/index"



function Menu(){
	const [search, setSearch] = useState("")
	const [filter, setFilter] = useState<number| null >(null)
	const [order, setOrder] = useState("")

	return(
		<>
			<section className={styles.menu}>
				<h2 className={styleTema.title}>Cardápio</h2>

				<SearchEngine search={search} setSearch={setSearch} />

				<div className={styles.menu__filter}>
					<Filters filter={filter} setFilter={setFilter}/>

					<span>
						<Order order={order} setOrder={setOrder}/>
					</span>
				</div>

				<Itens search={search} filter={filter} order={order}/>
			</section>

		</>
	)
}

export default Menu