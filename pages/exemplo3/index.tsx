import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Exemplo3: NextPage = ({repositorios, data}: InferGetStaticPropsType<typeof getStaticProps >) => {
  return (
    <div>
      exemplo3 em typescript: {data}
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
