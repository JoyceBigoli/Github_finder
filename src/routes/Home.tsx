import {UserProps} from '../types/user'
import { useState } from "react"
import Search from "../components/Search.tsx"


const Home = () => {
  const [user, setUser] = useState<UserProps | null >(null);
  const loadUser = async (userName:string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();
    const {avatar_url, login, location, following, followers} = data; 
    const userData: UserProps = {
      avatar_url,
      login, 
      location, 
      following, 
      followers
    };
    setUser(userData);
  }

  return (
    <div>
    <Search loadUser={loadUser}/>
    {user && <p>{user.login}</p>}
    </div>
  )
}

export default Home
