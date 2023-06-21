import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "Pages/home"
import Menu from "Pages/menu"
import About from "Pages/about"

import PageRoot from "Components/pageRoot"
import NotFound from "Pages/notFound"
import InfoDishes from "Pages/infoDishes"
import Navigation from "Components/navigation"
import Footer from "Components/footer"

function AppRouter() {
	return (
		<main>
			<Router>
				<Navigation />
				<Routes >
					<Route path="/" element={<PageRoot />} >
						<Route index element={<Home />} />
						<Route path="menu" element={<Menu />} />
						<Route path="about" element={<About />} />
					</Route>

					<Route path="dishes/:id" element={<InfoDishes />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}

export default AppRouter