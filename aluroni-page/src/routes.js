import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "Pages/home"
import Menu from "Pages/menu"
import About from "Pages/about"

import PageRoot from "Components/pageRoot"
import NotFound from "Pages/notFound"

function AppRouter() {
	return (
		<main>
			<Router>
				<Routes >
					<Route path="/" element={<PageRoot />} >
						<Route index element={<Home />} />
						<Route path="menu" element={<Menu />} />
						<Route path="about" element={<About />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</main>
	)
}

export default AppRouter