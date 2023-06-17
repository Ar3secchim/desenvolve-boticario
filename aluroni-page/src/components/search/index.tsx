import React from 'react'
import style from './search.module.scss'

import {CgSearch} from 'react-icons/cg'

interface Props{
  search: string,
  setSearch:React.Dispatch<React.SetStateAction<string>>
}

function SearchEngine({search, setSearch}: Props){
  return(
    <>
      <div className={style.searchEngine}>
        <input 
          value={search}
          placeholder="Buscar"
          onChange={event => setSearch(event.target.value)}
        />

        <CgSearch size={20} color="#4c4d5e" fill='#e4e4e4' />
      </div>
    </>
  )
} 
export default SearchEngine