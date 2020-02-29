import React, { Component } from 'react'
import VolunteersContext from '../VolunteersContext';
import Volunteer from '../Volunteer/Volunteer'
import config from '../config'
import './MainHome.css'


class MainHome extends Component {
    static defaultProps = {
        volunteers: []
    }

    componentDidMount() {
        fetch(config.API_ENDPOINT, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => {
          if(!res.ok) {
            return res.json().then(error => Promise.reject(error))
          }
          return res.json()
        })
        .then(this.setVolunteers)
        .catch(error => {
          console.error(error)
          this.setState({ error })
        })
      }

    static contextType = VolunteersContext

    render() {
        const { volunteers } = this.context
        return (
            <>
                <div className="volunteer-container">
                    <ul className="volunteer-list">
                        {volunteers.map(volunteer =>
                            <li key={volunteer.id}>
                                <Volunteer
                                    id={volunteer.id}
                                    name={volunteer.name}
                                    absents={volunteer.absents}
                                    tardies={volunteer.tardies}
                                    total_hours={volunteer.total_hours}
                                />
                            </li>)}
                    </ul>
                </div>
            </>
        )
    }
}

export default MainHome