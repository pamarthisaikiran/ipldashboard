import {Link} from 'react-router-dom'

import './index.css'

const CardsList = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="cards-container">
        <img className="card-img" alt={`${name}`} src={teamImageUrl} />
        <p className="card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default CardsList
