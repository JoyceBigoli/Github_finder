import { UserProps } from "../../types/user"
import {MdLocationPin}  from "react-icons/md"
import { Link } from "react-router-dom"

export const User= ({
    login,
    avatar_url, 
    location, 
    following, 
    followers
}:UserProps) => {
  return (
    <div>
        <img src={avatar_url} alt={login}></img>
        <h2>{login}</h2>
        {location && 
        <p>
            <MdLocationPin/>
            <span>{location}</span> 
        </p>
        }
        <div>
            <div>
                <p>seguidores:</p>
                <p>{followers}</p>
            </div>
            <div>
                <div>
                    <p>Seguindo:</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

