import { useState } from 'react'

import SearchEngine from 'components/search'
import Filters from 'components/filters'
import styles from './home.module.scss'

import {ReactComponent as Logo} from 'assets/logo.svg'
import Order from 'components/order'
import Itens from 'components/itens'


function Home(){
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<number| null >(null)
  const [order, setOrder] = useState("")

  return(
    <main>
      <nav className={styles.nav}>
        <Logo />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>

      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>

        <SearchEngine search={search} setSearch={setSearch} />

        <div className={styles.menu__filter}>
          <Filters filter={filter} setFilter={setFilter}/>

          <span>
            <Order order={order} setOrder={setOrder}/>
          </span>
        </div>

        <Itens search={search} filter={filter} order={order}/>
      </section>

    </main>
  )
}

export default Home