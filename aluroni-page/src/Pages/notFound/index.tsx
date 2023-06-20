import classNames from "classnames"
import {useNavigate} from "react-router-dom"

import style from "./notFound.module.scss"
import styleTema from "../../Styles/tema.module.scss"

import { ReactComponent as ImgNotFound } from "../../assets/not_found.svg"

function NotFound(){
	const navigate = useNavigate()

	return(
		<div className={classNames({
			[style.container]:true,
			[styleTema.container]:true,

		})}> 
			<div className={style.back}>
				<button onClick={()=>{navigate(-1)}}>
					{"< Voltar"}
				</button>

			</div>
			<ImgNotFound />
		</div>
	)
}

export default NotFound