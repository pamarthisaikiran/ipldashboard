// Write your code here
import React from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends React.Component {
  state = {TeamDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamItemData()
  }

  getTeamItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      teamBannerUrl: data.team_banner_url,

      latestMatchDetails: [data.latest_match_details].map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
      recentMatches: data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
    }
    console.log(updatedData)
    this.setState({TeamDetails: updatedData, isLoading: false})
  }

  renderTeamItemDetails = () => {
    const {TeamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = TeamDetails
    return (
      <div className="bg">
        <img className="img-top" src={teamBannerUrl} alt="team banner" />
        <div>
          <h1 className="lat">Latest Matchs</h1>
          <ul>
            {latestMatchDetails.map(each => (
              <LatestMatch latest={each} key={each.id} />
            ))}
          </ul>
          <ul className="wrap">
            {recentMatches.map(each => (
              <MatchCard card={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {renderTeamItemDetails} = this
    return (
      <div className="team-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          renderTeamItemDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
