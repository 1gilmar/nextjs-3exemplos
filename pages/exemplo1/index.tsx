import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'


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
     <Link href="/">
      <a>voltar</a>
     </Link>
     <div>
      exemplo1 em typescript: {new Date().toISOString()}
     </div>
      <ul>
        {repositorio.map((repo)=>( 
          <li key={repo}>{repo}</li> 
        ))}
      </ul>
    </div>
  )
}

export default Exemplo1
