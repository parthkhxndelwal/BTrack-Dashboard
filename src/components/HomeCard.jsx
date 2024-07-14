import React from 'react'

export default function HomeCard(props) {
  return (
    <div className="homeCard">
        <div className='homeCardDesc'>
            <h3>{props.topic}</h3>
            <p>{props.description}</p>
        </div>
        <div className="iconHomeCard">
          <span style={{fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 100", transform:'scale(1.4)'}} className="material-symbols-outlined">{props.icon}</span>
        </div>
    </div>
  )
}
