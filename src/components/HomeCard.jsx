import React from 'react'

export default function HomeCard(props) {
  return (
    <div className="homeCard">
        <div className="iconHomeCard">
        <span className="material-symbols-outlined">{props.icon}</span>
        </div>
        <div className='homeCardDesc'>
            <h3>{props.topic}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}
