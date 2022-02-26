import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'


export default function Exemplo2({ repositorios, data }: InferGetServerSidePropsType<typeof getServerSideProps>){
  return (
    <div>
      exemplo2 em typescript: {data}
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
