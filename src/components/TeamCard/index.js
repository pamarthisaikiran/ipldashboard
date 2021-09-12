// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CardsList from '../CardsList'

import './index.css'

class TeamCard extends Component {
  state = {
    TeamData: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const teamListData = data.teams.map(each => ({
      id: each.id,
      name: each.name,

      teamImageUrl: each.team_image_url,
    }))

    this.setState({TeamData: teamListData, isLoader: false})
  }

  render() {
    const {TeamData, isLoader} = this.state
    return (
      <div className="list-container">
        {isLoader ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          TeamData.map(eachItem => (
            <CardsList key={eachItem.id} teamData={eachItem} />
          ))
        )}
      </div>
    )
  }
}

export default TeamCard
