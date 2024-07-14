import React from 'react';

export default function Bottombar(props) {
  function determineIcon(page) {
    switch (page) {
      case 'Home': return 'home';
      case 'Fees': return 'currency_rupee_circle';
      case 'Attendance': return 'list_alt';
      case 'Account': return 'person';
      case 'Schedule': return 'schedule';
      default: return '';
    }
  }

  return (
    <div style={{ backgroundColor: '#EDEFF1', height:'10vh', borderTopLeftRadius:'20px', borderTopRightRadius:'20px' }} className='bottombar'>
      {Object.keys(props.subPages).map((page) => (
        <div style={{display:'flex', flexDirection:'column'}}>
          <button
          onClick={() => props.handleSetActive(page)}
          className="bottombarbuttonelement"
          style={
            props.active === page 
              ? { backgroundColor: '#A80303', color: '#FFB628', borderRadius:'50%' , width:'40px', height:'40px', margin: 'auto auto',padding:'10px', transform:'scale(1.2)'}
              : { backgroundColor: '#A80303', color: '#FFFFFF !important' , borderRadius:'50%', width:'40px', height:'40px', margin: 'auto auto',padding:'10px', transform:'scale(1.2)'}
          }
        >
          <span
            className='material-symbols-outlined bottomIcon'
            style={
              props.active === page 
                ? { fontVariationSettings: "'FILL' 1,'wght' 600,'GRAD' 0,'opsz' 30", backgroundColor: 'transparent', borderRadius:'50%' ,  margin: '-2px 0 0 -2px',} 
                : { backgroundColor: 'transparent', color: 'white', fontVariationSettings: "'FILL' 1,'wght' 600,'GRAD' 0,'opsz' 30", borderRadius:'50%',  margin: '-2px 0 0 -2px', }

            }
          >
            {determineIcon(page)}
          </span>
        </button>
        
        <p style={{fontSize:'11px', marginTop:'5px'}}>{page}</p>
        </div>
      ))}

    </div>
  );
}
