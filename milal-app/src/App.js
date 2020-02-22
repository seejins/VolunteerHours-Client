import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import dummyList from './dummy-list'
import MainLanding from './MainLanding/MainLanding'
import MainHome from './MainHome/MainHome'
import VolunteerContext from './volunteerContext';
import NavLanding from './NavLanding/NavLanding'
import NavHome from './NavHome/NavHome'
import './App.css'
import MainNewVolunteer from './MainNewVolunteer/MainNewVolunteer';



class App extends Component {
  state = {
    volunteers: [dummyList]
  }

  componentDidMount() {
    this.setState(dummyList)
    console.log(this.state)
  }

  getMainRoutes() {
    const { volunteers } = this.state

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


      </>
    )
  }



  render() {
    const contextValue = {
      volunteers: this.state.volunteers
    }

    return (
      <Fragment>
        <div className="App">
          <header className="App-Header">
            {this.getNavRoutes()}
          </header>
          <VolunteerContext.Provider value={contextValue}>

          <main className="App-Main">
            {this.getMainRoutes()}
          </main>

          </VolunteerContext.Provider>
        </div>
      </Fragment>
    );
  }

}

export default App;
