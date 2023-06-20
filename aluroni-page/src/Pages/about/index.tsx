import styles from "./about.module.scss"
import stylesTema from "../../Styles/tema.module.scss"

import casa from "../../assets/about/casa.png"
import massa1 from "../../assets/about/massa1.png"
import massa2 from "../../assets/about/massa2.png"

const imagens = [massa1, massa2]

function About(){
	return(
		<section>
			<h3 className={stylesTema.title}>Sobre</h3>

			<div className={styles.about}>
				<img src={casa} alt="Casa Aluroni" />
				<div className={styles.about__text}>
					<p >
						Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e 
						sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente 
						qualidade para que sua experiência seja ainda mais intensa!
					</p>

					<p>
						Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
					</p>

					<p>
						Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o 
						seu parto, seja carne ou massa!
					</p>
				</div>
			</div>

			<div className={styles.imagens}>
				{imagens.map((imagem, index)=> (
					<div key={index} className={styles.imagens__imagem}>
						<img src={imagem} alt="imagem de massas" />
					</div>
				))}
			</div>
		</section>
	)
}

export default About