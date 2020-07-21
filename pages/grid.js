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
          <div className="grid-item grid-header">Header</div>
          <div className="grid-item">Grid Item 1</div>
          <div className="grid-item">Grid Item 2</div>
          <div className="grid-item">Grid Item 3</div>
          <div className="grid-item">Grid Item 4</div>
          <div className="grid-item">Grid Item 5</div>
          <div className="grid-item">Grid Item 6</div>
          <div className="grid-item">Grid Item 7</div>
          <div className="grid-item">Grid Item 8</div>
        </div>
      </body>

      <style jsx global>{`
        .grid-container {
          display: grid;
          font-family: Arial, Helvetica, sans-serif;
          font-color: white;
          grid-template-columns: repeat(4, 25%);
          grid-auto-rows: minmax(200px, auto); 
          grid-row-gap: 5px;
          grid-column-gap: 5px;
          grid-template-areas:
            "header header header header"
        }
        
        .grid-item {
          font-size: large;
          background: #34ebeb;
          text-align: center;
          border: 1px solid white;
          padding: 100px;
          border-radius: 15px
        }

        .grid-header {
          grid-area: header;
          background: #a83293;
        }
      `}
      </style>
    </div>
  )
}

export default grid