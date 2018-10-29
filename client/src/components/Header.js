import React from 'react';

const Header = props => {
  return (
    <header>
      {props.isLoggedIn && 
        <div>
          {props.currentUser && 
            <span>Welcome, {props.currentUser}.  </span>}
          <span className='button' onClick={() => props.logout()}>Logout</span>
        </div>
      }
    </header>
  )
}

export default Header;