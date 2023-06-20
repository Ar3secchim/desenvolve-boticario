import style from "./footer.module.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg"

function Footer(){
	return(
		<footer className={style.footer}>
			<Logo />
		</footer>
	)
}

export default Footer