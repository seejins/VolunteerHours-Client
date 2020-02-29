import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VolunteersContext from '../VolunteersContext'
import config from '../config'
import './MainNewVolunteer.css'

class MainNewVolunteer extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
    }

    static contextType = VolunteersContext

    state = {
        error: null,
    }

    handleSubmit = e => {
        e.preventDefault()
        let { name, absents, tardies, total_hours  } = e.target
        const volunteer = {
            name: name.value,
            absents: (absents.value),
            tardies: (tardies.value),
            total_hours: (total_hours.value),
        }
        this.setState({ error: null })
        fetch(config.API_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(volunteer),
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
            .then(data => {
                name.value = ''
                absents.value = ''
                tardies.value = ''
                total_hours = ''
                this.context.addVolunteer(data)
                this.props.history.push('/home')
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })

    }

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <div className="form-container">
                    <h2 className="form-title">Add a new Volunteer</h2>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="edit name">
                            <label htmlFor='name'>
                                Name
                                {' '}
                               
                            </label>
                            <input className="input name" type="text" placeholder="Random Name" id='name' required />
                        </div>

                        <div className="edit absents">
                            <label htmlFor='absents'>
                                Absents
                                {' '}
                            
                            </label>
                            <input className="input absents" type="number" placeholder="Absents" id='absents' required />
                        </div>

                        <div className="edit tardies">
                            <label htmlFor='tardies'>
                                Tardies
                                {' '}
                            
                            </label>
                            <input className="input tardies" type="number" placeholder="Tardies" id='tardies' required />
                        </div>

                        <div className="edit total-hours">
                            <label htmlFor='Total_Hours'>
                                Total Hours
                                {' '}
                            </label>
                            <input className="input total-hours" type="number" placeholder="Total Hours" id='total_hours'required />
                        </div>

                        <button className="input submit-button" type='submit'> Add Volunteer</button>
                        <button className="input cancel-button" type='button' onClick={this.handleClickCancel}>
                            Cancel
                        </button>
                    </form>


                </div>


            </>
        )
    }
}

export default MainNewVolunteer