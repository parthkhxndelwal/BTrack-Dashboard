import React from 'react';

export default function Bottombar(props) {
  function determineIcon(page) {
    switch (page) {
      case 'Home': return 'home';
      case 'Fees': return 'currency_rupee_circle';
      case 'Attendance': return 'list_alt';
      case 'Account': return 'person';
      case 'Location': return 'location_on';
      case 'Schedule': return 'schedule';
      default: return '';
    }
  }

  return (
    <div className='bottombar'>
      {Object.keys(props.subPages).map((page) => (
        <button
          onClick={() => props.handleSetActive(page)}
          className="bottombarbuttonelement"
          style={
            props.active === page 
              ? { backgroundColor: 'black', color: 'white' } 
              : { backgroundColor: 'white', color: 'black' }
          }
        >
          <span
            className='material-symbols-outlined bottomIcon'
            style={
              props.active === page 
                ? { fontVariationSettings: "'FILL' 1,'wght' 600,'GRAD' 0,'opsz' 30", backgroundColor: 'transparent' } 
                : { backgroundColor: 'transparent', color: 'black' }
            }
          >
            {determineIcon(page)}
          </span>
        </button>
      ))}
    </div>
  );
}
