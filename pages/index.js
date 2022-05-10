import HomeContainer from '../containers/Home'
import Layout from "../layout"

const Home = () => {

  return (
    <div className="page-wrapper">
      <Layout>
        <HomeContainer />
      </Layout>
    </div>
  )
}

export default Home;