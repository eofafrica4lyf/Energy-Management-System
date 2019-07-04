import React from 'react'
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <div id='header' style={{display: 'flex', flexDirection: 'column', flex: '1 0 0', backgroundColor: '#181745', padding: '1em 0 1em 1em'}}>
      <aside style={{flex: '1 0 100vh'}}>
        <div id='logo' style={{fontSize: '27px'}}>
          ENERGON 
          <span style={{color: '#e6526d', fontFamily: 'Nunito Sans Light, sans-serif', fontWeight:'lighter', fontSize: '15px'}}>  BETA</span>

          <nav>
            <ul>
              <li id="dashboard"><NavLink activeClassName='active' to="/dashboard">Dashboard</NavLink></li>
              <li id="costs"><NavLink activeClassName='active' to="/costs">Costs</NavLink></li>
              <li id="applicances"><NavLink activeClassName='active' to="/appliances">Appliances</NavLink></li>
              <li id="usage_by_rooms"><NavLink activeClassName='active' to="/usage">Usage-by-room</NavLink></li>
              <li id="emissions"><NavLink activeClassName='active' to="/emissions">Emissions</NavLink></li>
            </ul>
          </nav>
          
        </div>
      </aside>
    </div>
  )
}

export default Header
