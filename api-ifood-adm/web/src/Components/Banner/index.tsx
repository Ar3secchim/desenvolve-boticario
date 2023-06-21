import style from './Banner.module.scss'

const Banner = () => {
	return (<section className={style.BannerArea}>
		<div className={style.Container}>
			<h1 className={style.Titulo}>AlFood</h1>
			<p>Felicidade em cada prato.</p>
		</div>
	</section>)
}

export default Banner