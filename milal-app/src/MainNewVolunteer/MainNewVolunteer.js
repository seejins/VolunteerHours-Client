import React, { Component } from 'react'
import './MainNewVolunteer.css'

class MainNewVolunteer extends Component {
    render () {
        return (
            <>
                <div className="form-container">
                    <h2 className="form-title">Add a new Volunteer</h2>

                    <form className="form">
                        <input className="input title" type="text" placeholder="Name" required/>
                        <input className="input join-date" type="text" placeholder="Join Date" required/>
                        <textarea className="input notes-content" type="text" placeholder="Notes"/>

                        <button className="input submit-button"> Add Volunteer</button>
                    </form>


                </div>


            </>
        )
    }
}

export default MainNewVolunteer