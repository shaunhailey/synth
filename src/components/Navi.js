import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'

class Navi extends Component {
  render() {
    return (
      <div className="Navi">
        <nav className="Navi">
          <NavLink activeClassName="selected" className="nav-link" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="selected" className="nav-link" exact to="/Help">
            Help
          </NavLink>
        </nav>
      </div>
    )
  }
}

export default Navi
