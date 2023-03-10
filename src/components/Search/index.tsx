type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}
import {BsSearch} from 'react-icons/bs'
import { useState, KeyboardEvent } from "react"
import style from './style.module.css'

export const Search = ({loadUser}:SearchProps) => {
    const [userName , setUserName] = useState('')
    const handleKeyDown = (e:KeyboardEvent) => {
        if (e.key === "Enter"){
           loadUser(userName);
        }
    };
  return (
    <div className={style.search}> 
        <h2>Busque por um usuário</h2>
        <p>Conheça seus melhores Repositórios</p>
        <div className={style.search_container}>
            <input 
            onKeyDown={handleKeyDown}
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

