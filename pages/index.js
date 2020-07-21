import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <a href="/grid">CSS Grid</a>
      </body>
    </div>
  )
}
