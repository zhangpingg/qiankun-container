import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      父 home 页面 <br />
      <Link to='/childReact'>子react</Link> <br />
      <Link to='/childVue'>子vue</Link>
    </div>
  )
}

export default Home