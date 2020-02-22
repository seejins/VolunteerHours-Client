import React, { Component } from 'react'
import VolunteerContext from '../volunteerContext';
import Volunteer from '../Volunteer/Volunteer'
import './MainHome.css'


class MainHome extends Component {
    static contextType = VolunteerContext

    render() {
        return (
            <>
                <div className="volunteer-container">
                    <ul className="volunteer-list">
                        {console.log("1", this.context)}
                        {this.context.volunteers.map(volunteer =>
                            <li key={volunteer.id}>
                                <Volunteer
                                    id={volunteer.id}
                                    name={volunteer.name}
                                    absents={volunteer.absents}
                                    tardies={volunteer.tardies}
                                />
                            </li>)}
                    </ul>
                </div>
            </>
        )
    }
}

export default MainHome