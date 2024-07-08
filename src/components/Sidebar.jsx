  import React from 'react'
  import btrackLogo from '/src/assets/logo/BTRACK.png'
  export default function Sidebar(props) {
    return (
      <div className="sidebar">
            <div>
              <div className="logoHead">
                <img id="sidebarLogo" src={btrackLogo} alt="BTrack Logo" />
              </div>
              <div className="sidebar_navigation_main">
              {Object.keys(props.subPages).map((page) => (
                  <button
                    key={page}
                    onClick={() => props.handleSetActive(page)}
                    id="sidebarButton"
                    style={props.active === page ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
            
          </div>    
  )
  }
