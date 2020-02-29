import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Volunteer.css'
import VolunteersContext from '../VolunteersContext';
import config from '../config'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function deleteVolunteerRequest(volunteerId, callback) {
    fetch(config.API_ENDPOINT + `/${volunteerId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => Promise.reject(error))
            }
            return res
        })
        .then(noContent => {
            callback(volunteerId)
        })
        .catch(error => {
            console.error(error)
        })
}


class Volunteer extends Component {

    static contextType = VolunteersContext

    render() {
        const { name, absents, tardies, total_hours } = this.props
        return (
            <>
                <div className="volunteer">
                    <Collapsible trigger={name}>
                        <div className="content-container">
                            <div className="list volunteer-absents">
                                Absents: {absents}
                            </div>

                            <div className="list volunteer-tardies">
                                Tardies: {tardies}
                            </div>

                            <div className="list volunteer-total-hours">
                                Total Hours: {total_hours}
                            </div>

                        </div>
                        <div className="icon-container">
                            <Link to={`/edit/${this.props.id}`}>
                                <FontAwesomeIcon className="icon edit" icon="edit" size="lg" />
                            </Link>

                            <Link to={`/home`}>
                            <FontAwesomeIcon className="icon trash" icon="trash" size="lg" onClick={() => deleteVolunteerRequest(this.props.id, this.context.deleteVolunteer)}/>
                            </Link>
                        </div>
                    </Collapsible>
                </div>
            </>

        )
    }
}

export default Volunteer