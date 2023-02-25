import {BsSearch} from 'react-icons/bs'

function Search() {
  return (
    <div> 
        <h2>Busque por um usuário</h2>
        <p>Conheça seus melhores Repositórios</p>
        <div>
            <input type='text' placeholder='Digite o nome do usuário'/>
            <button>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search;