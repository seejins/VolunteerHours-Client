import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import MainLanding from './MainLanding/MainLanding'
import MainHome from './MainHome/MainHome'
import NavLanding from './NavLanding/NavLanding'
import NavHome from './NavHome/NavHome'
import MainEditVolunteer from './MainEditVolunteer/MainEditVolunteer'
import './App.css'
import MainNewVolunteer from './MainNewVolunteer/MainNewVolunteer'
import VolunteersContext from './VolunteersContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import config from './config'



library.add(faEdit, faTrash)

class App extends Component {
  state = {
    volunteers: [],
    error: null,
  }

  setVolunteers = volunteers => {
    this.setState({
      volunteers,
      error: null,
    })
  }

  addVolunteer = volunteer => {
    this.setState({
      volunteers: [...this.state.volunteers, volunteer ],
    })
  }

  deleteVolunteer = volunteerId => {
    const newVolunteers = this.state.volunteers.filter(vol => 
      vol.id !== volunteerId
      )
      this.setState({
        volunteers: newVolunteers
      })
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

  editVolunteer = editedVolunteer => {
    this.setState({
      volunteers: this.state.volunteers.map(vol =>
        (vol.id !== editedVolunteer.id) ? vol : editedVolunteer)
    })
  }


  getMainRoutes() {
    return (
      <>
        <Route
          exact path='/'
          key='/'
          component={MainLanding}
        />

        <Route
          exact path='/home'
          key='/home'
          component={MainHome}
        />

        <Route
          exact path='/new'
          key='/newVolunteer'
          component={MainNewVolunteer}
        />

        <Route 
          exact path='/edit/:volunteerId'
          key='/editVolunteer'
          component={MainEditVolunteer}
        />


      </>
    )
  }

  getNavRoutes() {

    return (
      <>

        <Route
          exact path='/'
          key='/'
          component={NavLanding}
        />

        <Route
          exact path='/home'
          key='/home'
          component={NavHome}
        />

        <Route
          exact path='/new'
          key='/newVolunteer'
          component={NavHome}
        />

        <Route
          exact path='/edit/:volunteerId'
          key='/editVolunteer'
          component={NavHome}
        />


      </>
    )
  }



  render() {
    const contextValue = {
      volunteers: this.state.volunteers,
      addVolunteer: this.addVolunteer,
      deleteVolunteer: this.deleteVolunteer,
      editVolunteer: this.editVolunteer,
    }

    return (
      <Fragment>
        <div className="App">
          <header className="App-Header">
            {this.getNavRoutes()}
          </header>
          <VolunteersContext.Provider value={contextValue}>

          <main className="App-Main">
            {this.getMainRoutes()}
          </main>

          </VolunteersContext.Provider>
        </div>
      </Fragment>
    );
  }

}

export default App;
