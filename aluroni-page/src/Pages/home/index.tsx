import { useNavigate } from "react-router-dom" 

import { Dishes } from "Types/dishes"

import menu from "../../Data/menu.json"
import style from "./home.module.scss"
import styleTema from "../../Styles/tema.module.scss"

import nossaCasa from "assets/nossa_casa.png"

function Home(){
	let recommendedDishes = [...menu]
	recommendedDishes = recommendedDishes.sort(()=> 0.5 - Math.random()).splice(0,3)
	const navigate = useNavigate()

	function redirectInfoDishes(dishes: Dishes){
		navigate(`/dishes/${dishes.id}`, {state: {dishes}, replace: true})
	}

	return(
		<section>
			<h3 className={styleTema.title}>Recomendações da cozinha</h3>
			<div className={style.recommended}>
				{recommendedDishes.map((item) =>(
					<div key={item.id} className={style.recommendeds}>
						<div className={style.recommendeds__imagem}>
							<img src={item.photo} alt={item.title}/>
						</div>
						<button className={style.recommendeds__button}
							onClick={()=>redirectInfoDishes(item)}
						>
              Ver mais
						</button>
					</div>
				))}
			</div>

			<h3 className={styleTema.title}>Nossa Casa</h3>
			<div className={style.ourHome}>
				<img src={nossaCasa} />
				<div className={style.ourHome__address}>
					Rua vergeiro, 3185
					<br />
					Vila Mariana
				</div>
			</div>
		</section>
	)
}

export default Home