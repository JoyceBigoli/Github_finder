import { UserProps } from "../../types/user"
import {MdLocationPin}  from "react-icons/md"
import { Link } from "react-router-dom"
import style from './style.module.css'

export const User= ({
    login,
    avatar_url, 
    location, 
    following, 
    followers
}:UserProps) => {
  return (
    <div className={style.user}>
        <img src={avatar_url} alt={login}></img>
        <h2>{login}</h2>
        {location && 
        <p className={style.location}>
            <MdLocationPin/>
            <span>{location}</span> 
        </p>
        }
        <div className={style.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={style.number}>{followers}</p>
            </div>            
            <div>
                <p>Seguindo:</p>
                <p className={style.number}>{following}</p>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

