import {UserProps} from '../types/user'
import { useState } from "react"
import Search from "../components/Search.tsx"


const Home = () => {
  const [user, setUser] = useState<UserProps | null >(null);
  const loadUser = async (userName:string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();
    console.log('data', data);
  }

  return (
    <div>
    <Search loadUser={loadUser}/>
    </div>
  )
}

export default Home
