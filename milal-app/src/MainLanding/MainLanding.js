import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainLanding.css'


class MainLanding extends Component {
    render() {
        return (
            <>
                <section className="landing-summary">
                    <p>A website where you can track all volunteer information and hours.</p>
                    <Link to='/home'>
                        <button>
                            Get Started
                        </button>
                    </Link>
                </section>
            </>
        )
    }
}

export default MainLanding