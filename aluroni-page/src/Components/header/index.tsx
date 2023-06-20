import styles from "./header.module.scss"

function Header(){
	return(
		<header className={styles.header}>
			<div className={styles.header__text}>
          A casa do código e da massa
			</div>
		</header>
	)
}

export default Header