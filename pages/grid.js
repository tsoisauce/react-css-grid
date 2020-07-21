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
          <div className="grid-item grid-hero">Hero</div>
          <div className="grid-item">Grid Item 1</div>
          <div className="grid-item">Grid Item 2</div>
          <div className="grid-item">Grid Item 3</div>
          <div className="grid-item">Grid Item 4</div>
          <div className="grid-item">Grid Item 5</div>
          <div className="grid-item">Grid Item 6</div>
          <div className="grid-item">Grid Item 7</div>
          <div className="grid-item">Grid Item 8</div>
          <div className="grid-item grid-footer">Footer</div>
        </div>
      </body>

      <style jsx global>{`
        .grid-container {
          display: grid;
          gap: 0.5rem;
          font-family: Arial, Helvetica, sans-serif;
          font-color: white;
          font-size: large;
          text-align: center;
          padding: 20px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          justify-content: center;
          
        }
        
        .grid-item {
          background: #34ebeb;
          border-radius: 10px;
          border: 1px solid white;
          padding: 100px;
          grid-column: span 1;
        }

        .grid-header {
          grid-column: 1 / -1;
          background: #a83293;
        }

        .grid-hero {
          grid-column: 1 / -1;
          background: #4632a8;
        }

        .grid-footer {
          grid-column: 1 / -1;
          background: #5ba832;
          grid-auto-rows: minmax(200px, auto); 
        }
      `}
      </style>
    </div>
  )
}

export default grid