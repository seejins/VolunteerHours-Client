import React, { Component } from 'react'
import './NavHome.css'


class NavHome extends Component {
    render() {
        return (
            <>
                <nav className="nav-home">
                    <a className="nav-link-landing" href="/">
                        Milal
                    </a>

                    <div className="nav-links">

                        <a className="nav-volunteers" href="/home">
                            Volunteers
                        </a>

                        <a className="new-volunteer" href="/new">
                            New Volunteer
                        </a>

                    </div>
                </nav>

            </>
        )
    }
}

export default NavHome