import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalsId: countryAndCapitalsList[0].id,
  }

  onChangeCapitals = event => {
    this.setState({activeCapitalsId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalsId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalsId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalsId} = this.state
    const country = this.getCountry(activeCapitalsId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capitals-list"
              onChange={this.onChangeCapitals}
              value={activeCapitalsId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
