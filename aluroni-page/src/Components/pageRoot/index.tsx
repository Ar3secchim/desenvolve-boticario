import { Outlet } from "react-router-dom"
import Header from "Components/header"
import styleTema from "../../Styles/tema.module.scss"
import Navigation from "Components/navigation"
import Footer from "Components/footer"


function PageRoot(){
	return(
		<>
			<Navigation />
			<Header />

			<div className={styleTema.container}>
				<Outlet />
			</div>

			<Footer />
		</>
	)
}

export default PageRoot