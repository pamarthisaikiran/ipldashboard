// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latest} = props

  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
    id,
  } = latest
  return (
    <li className="team-latest">
      <div className="one">
        <p className="heading-lat">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="two">
        <img
          className="imgl"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <div className="three">
        <p className="ing">First Innings</p>
        <p className="fir-ing">{firstInnings}</p>
        <p className="ing">Second Innings</p>
        <p className="sec-ing">{secondInnings}</p>
        <p className="ing">Man Of The Match</p>
        <p className="man">{manOfTheMatch}</p>
        <p className="ing">Umpires</p>
        <p className="ump">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
