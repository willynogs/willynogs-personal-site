import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <p>Will Naugle</p>
        <p>Software Engineer</p>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Source Code Pro', monospace;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </Layout>
  )
}

export default Home
