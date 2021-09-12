// Write your code here

import './index.css'

const MatchCard = props => {
  const {card} = props
  const {id, competingTeamLogo, competingTeam, result, matchStatus} = card

  let cls

  if (matchStatus === 'Won') {
    cls = 'statu1'
  } else {
    cls = 'statu2'
  }

  return (
    <li className="bgl">
      <img
        className="imgl"
        alt={`competing team ${competingTeam} `}
        src={competingTeamLogo}
      />
      <p className="headingl">{competingTeam}</p>
      <p className="resultl">{result}</p>
      <p className={cls}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
