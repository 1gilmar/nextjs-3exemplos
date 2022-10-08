import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'

const Exemplo3: NextPage = ({repositorios, data}: InferGetStaticPropsType<typeof getStaticProps >) => {
  return (
    <div>
      <Link href="/">
        <a>voltar</a>
     </Link>
     <div>
      exemplo3 em typescript: {data}
     </div>
      <ul>
        {repositorios.map((repo: any)=>(
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Exemplo3

export const getStaticProps: GetStaticProps = async () => {
  
  const resposta = await fetch('https://api.github.com/users/1gilmar/repos');
  
  const data = await resposta.json();
  const repositorioNomes = data.map((item: any) => item.name);

  return {
    props: {
      repositorios: repositorioNomes,
      data: new Date().toISOString(),
    },
    revalidate: 15,
  }
}
