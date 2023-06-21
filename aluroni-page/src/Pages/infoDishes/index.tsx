import { useNavigate, useParams } from "react-router-dom"

import style from "./infoDishes.module.scss"
import NotFound from "Pages/notFound"
import Tags from "Components/tags"
import menu from "../../Data/menu.json"
import PageRoot from "Components/pageRoot"

function InfoDishes() {
	const navigate =  useNavigate()
	const { id } = useParams()

	const dishes =  menu.find(item => item.id === Number(id))
	if(!dishes) return <NotFound/>

	return(
		<PageRoot>
			<button className={style.back} onClick={()=>{navigate(-1)}}>
				{"< voltar"}
			</button>

			<section className={style.container}>
				<h1 className={style.title}>
					{dishes.title}
				</h1>

				<div className={style.imagem}>
					<img src={dishes.photo} alt={dishes.title} />
				</div>

				<div className={style.content}>
					<p className={style.content__description}>
						{dishes.description}
					</p>

					<Tags {...dishes}/>
				</div>
			</section>  
		</PageRoot>
	)
}

export default InfoDishes