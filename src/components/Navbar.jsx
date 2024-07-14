import React, { useState } from 'react'
import BTrackMobileNav from '/src/assets/logo/BTrackMobileNav.png'
export default function Navbar(props) {
  const [query, setQuery] = useState();
  return (
    <div style={{ backgroundColor: '#EDEFF1' }} className="dashNav">
      {window.innerWidth < 425 ? <img className='mobile-logo' src={BTrackMobileNav} /> : <h1>{props.heading}</h1>}
      <div className="dashend">
        <input id='searchInput' placeholder={' Search'} name="text" type="search" onChange={(e) => { props.setQuery(e.target.value) }}></input>
        <span style={{fontVariationSettings: "'FILL' 1,'wght' 600,'GRAD' 0,'opsz' 30"}} className="material-symbols-outlined noticon">notifications</span>
        <span style={{fontVariationSettings: "'FILL' 1,'wght' 600,'GRAD' 0,'opsz' 30"}} className="material-symbols-outlined noticon">account_circle</span>
      </div>
    </div>
  )
}
