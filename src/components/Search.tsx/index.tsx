type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}
import {BsSearch} from 'react-icons/bs'
import { useState } from "react"
import style from './style.module.css'

const Search = ({loadUser}:SearchProps) => {
    const [userName , setUserName] = useState('')
  return (
    <div className={style.search}> 
        <h2>Busque por um usuário</h2>
        <p>Conheça seus melhores Repositórios</p>
        <div className={style.search_container}>
            <input 
            type='text'
            placeholder='Digite o nome do usuário'
            onChange={(e) => setUserName(e.target.value) }/>
            <button onClick={() => loadUser(userName)}>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search;