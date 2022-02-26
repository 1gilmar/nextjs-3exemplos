import type { NextPage } from 'next'
import { useEffect, useState } from 'react'


const Exemplo1: NextPage = () => {
  const [repositorio, setRepositorio] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/1gilmar/repos')
      .then((response) => response.json())
      .then((data) => {
        const repositorioNomes = data.map((item: any) => item.name);
        setRepositorio(repositorioNomes)
      });
  }, []);


  return (
    <div>
      exemplo1 em typescript
      <ul>
        {repositorio.map((repo)=>( 
          <li key={repo}>{repo}</li> 
        ))}
      </ul>
    </div>
  )
}

export default Exemplo1
