import React, { Component } from 'react'
import './Volunteer.css'

class Volunteer extends Component {
    render() {
        const { name, absents, tardies } = this.props
        return (
            <>
                <div className="volunteer">

                    <div className="list volunteer-name">
                        <h2>{name}</h2>
                    </div>

                    <div className="list volunteer-absents">
                        Absents: {absents}
                    </div>

                    <div className="list volunteer-tardies">
                        Tardies: {tardies}
                    </div>

                    <button className="volunteer-edit"> edit </button>
                </div>
            </>

        )
    }
}

export default Volunteer