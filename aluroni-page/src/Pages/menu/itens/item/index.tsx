import { useNavigate } from "react-router-dom"

import styles from "./item.module.scss" 
import Tags from "Components/tags"
import { Dishes } from "Types/dishes"


export default function Item(props: Dishes) {
	const {id,title,description,photo} = props
	const navigate = useNavigate()

	return (
		<div className={styles.item} onClick={()=>navigate(`/dishes/${id}`)}>
			<div className={styles.item__imagem}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2> {title} </h2>
					<p> {description}</p>
				</div>

				<Tags {...props}/>
			</div>
		</div>
	)
}
