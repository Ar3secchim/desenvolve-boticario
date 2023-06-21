import  React  from 'react'
import NavBarAdm from '../NavBarAdm'
import { Outlet } from 'react-router-dom'

function PageLayoutAdm({children}: {children?: React.ReactNode}){
	return( 
		<>
			<NavBarAdm />
			<Outlet />
			{children}
		</>
	)
}

export default PageLayoutAdm