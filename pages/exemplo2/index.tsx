import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

export default function Exemplo2({ repositorios, data }: InferGetServerSidePropsType<typeof getServerSideProps>){
  return (
    <div>
      <Link href="/">
      <a>votar</a>
     </Link>
     <div>
      exemplo2 em typescript: {data}
     </div>
      <ul>
        {repositorios.map((repo: any)=>(
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const resposta = await fetch('https://api.github.com/users/1gilmar/repos');
  
  const data = await resposta.json();
  const repositorioNomes = data.map((item: any) => item.name);

  return {
    props: {
      repositorios: repositorioNomes,
      data: new Date().toISOString(),
    }
  }
}
