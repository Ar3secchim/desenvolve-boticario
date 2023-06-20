import {ReactComponent as Logo} from "assets/logo.svg"
import styles from "./navegation.module.scss"
import { Link } from "react-router-dom"

function Navigation(){
	const routes = [
		{
			label: "Home",
			to: "/"
		},{
			label: "Menu",
			to: "/menu"
		},{
			label: "Sobre",
			to: "/about"
		},
	]
	
	return(	
		<nav className={styles.nav}>
			<Logo />
			<ul className={styles.nav__list}>
				{routes.map((route, index) =>(
					<li key={index} className={styles.nav__link}>
						<Link to={route.to} >
							{route.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>)
}

export default Navigation