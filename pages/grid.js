import Head from 'next/head'

const grid = () => {
  return (
    <div>
      <Head>
        <title>Responsive CSS Grid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <div className="grid-container">
          <div className="grid-item">Grid Item 1</div>
          <div className="grid-item">Grid Item 2</div>
          <div className="grid-item">Grid Item 3</div>
          <div className="grid-item">Grid Item 4</div>
        </div>
      </body>

      <style jsx global>{`
        .grid-container {
          display: grid;
          font-family: Arial, Helvetica, sans-serif;
          grid-template-columns: 25% 25% 25% 25%;
        }
        
        .grid-item {
          font-size: large;
          background: #34ebeb;
          text-align: center;
          border: 1px solid white;
          margin: 5px;
          padding: 50px;
          border-radius: 25px
        }
      `}
      </style>
    </div>
  )
}

export default grid