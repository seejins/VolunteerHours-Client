import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VolunteersContext from '../VolunteersContext'
import config from '../config'
import './MainEditVolunteer.css'


class MainEditVolunteer extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
        }),
        history: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
    }

    static contextType = VolunteersContext

    state = {
        error: null,
        id: '',
        name: '',
        absents: '',
        tardies: '',
        total_hours: '',
    }

    componentDidMount() {
        const { volunteerId } = this.props.match.params
        console.log('param', volunteerId)
        fetch(config.API_ENDPOINT + `/${volunteerId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
            .then(data => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    absents: data.absents,
                    tardies: data.tardies,
                    total_hours: data.total_hours,
                })
            }) 
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    handleChangeName = e => {
        this.setState({ name: e.target.value })
    }

    handleChangeAbsents = e => {
        this.setState({ absents: e.target.value })
    }

    handleChangeTardies = e => {
        this.setState({ tardies: e.target.value })
    }

    handleChangeTotalHours = e => {
        this.setState({ total_hours: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { volunteerId } = this.props.match.params
        const { name, absents, tardies, total_hours } = this.state
        const newVolunteer = { name, absents, tardies, total_hours }
        fetch(config.API_ENDPOINT + `/${volunteerId}`, {
            method: 'PATCH',
            body: JSON.stringify(newVolunteer),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
            })
            .then(() => {
                this.resetFields(newVolunteer)
                this.context.editVolunteer(newVolunteer)
                this.props.history.push('/home')
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    resetFields = (newFields) => {
        this.setState({
            id: newFields.id || '',
            name: newFields.name || '',
            absents: newFields.absents || '',
            tardies: newFields.tardies || '',
            total_hours: newFields.total_hours || '',
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/home')
    }

    render() {
        const { name, absents, tardies, total_hours } = this.state
        return (
            <section className='EditVolunteer'>
                <h2>{`Edit ${name}`}</h2>
                <form
                    className='EditBookmark_form'
                    onSubmit={this.handleSubmit}
                >


                    <div className="edit name">
                        <label htmlFor='name'>
                            Name
                                {' '}
                        </label>
                        <input
                            className="input name"
                            type='text'
                            name='name'
                            id='name'
                            placeholder='John Doe'
                            required
                            value={name}
                            onChange={this.handleChangeName}
                        />
                    </div>

                    <div className="edit absents">
                        <label htmlFor='absents'>
                            Absents
                                {' '}
                        </label>
                        <input
                        className="input absents"
                            type='number'
                            name='absents'
                            id='abents'
                            placeholder='0'
                            required
                            value={absents}
                            onChange={this.handleChangeAbsents}
                        />
                    </div>

                    <div className="edit tardies">
                        <label htmlFor='tardies'>
                            Tardies
                                {' '}
                        </label>
                        <input
                        className="input tardies"
                            type='number'
                            name='tardies'
                            id='tardies'
                            placeholder='0'
                            required
                            value={tardies}
                            onChange={this.handleChangeTardies}
                        />
                    </div>

                    <div className="edit total-hours">
                        <label htmlFor='total_hours'>
                            Total Hours
                                {' '}
                        </label>
                        <input
                        className="input total-hours"
                            type='number'
                            name='total_hours'
                            id='total_hours'
                            placeholder='0'
                            required
                            value={total_hours}
                            onChange={this.handleChangeTotalHours}
                        />
                    </div>
                    <div className="button-container">
                        <button className="save-button" type='submit'>
                            Save
                        </button>
                        <button className="cancel-button" type='button' onClick={this.handleClickCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}

export default MainEditVolunteer