import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>React CSS Grid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <nav>Navbar</nav>
        <main>Main</main>
        <div className="grid-items">
          <div className="grid-item">Item 1</div>
          <div className="grid-item">Item 2</div>
          <div className="grid-item">Item 3</div>
          <div className="grid-item">Item 4</div>
          <div className="grid-item">Item 5</div>
          <div className="grid-item">Item 6</div>
          <div className="grid-item">Item 7</div>
          <div className="grid-item">Item 8</div>
        </div>
        <footer>Footer</footer>
      </div>
    </>
  )
}
