import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <h1>nextjs 3 exemplos em typescript</h1>
      <nav>

      <ul>
        <li>
          <Link href="/exemplo1">
            <a>exemplo1</a>
          </Link>
        </li> 
        <li>
          <Link href="/exemplo2">
            <a>exemplo2 GetServerSideProps</a>
          </Link>
        </li>
        <li>
          <Link href="/exemplo3">
            <a>exemplo3 GetStaticProps</a>
          </Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default Home

