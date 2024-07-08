import React, { useState } from 'react'
export default function Navbar(props) {
  const [query, setQuery] = useState();
  return (
    <div className="dashNav">
      <h1>{props.heading}</h1>
      <div className="dashend">
      <input id='searchInput' placeholder={' Search'} name="text" type="search" onChange={(e)=>{props.setQuery(e.target.value)}}>
      </input>
      <span className="material-symbols-outlined noticon">notifications</span>
      <span className="material-symbols-outlined noticon">account_circle</span>
      </div>
    </div>
  )
}
