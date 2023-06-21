import { Outlet } from "react-router-dom"
import React from "react"

import Header from "Components/header"

import styleTema from "../../Styles/tema.module.scss"

function PageRoot({children}: {children?: React.ReactNode}){
	return(
		<>
			<Header />

			<div className={styleTema.container}>
				<Outlet />
				{children}
			</div>

		</>
	)
}

export default PageRoot