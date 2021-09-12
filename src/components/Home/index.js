// Write your code here
import TeamCard from '../TeamCard'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="head-logo">
      <img
        className="img-logo"
        alt="ipl logo"
        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
      />
      <h1 className="home-heading">IPL Dashboard</h1>
    </div>
    <ul className="Card">
      <TeamCard />
    </ul>
  </div>
)

export default Home
