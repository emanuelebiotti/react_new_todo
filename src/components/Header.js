import React from 'react';
import { black } from 'ansi-colors';

const Header = () => {

    const headerStyle = {
        width:'100%',
        height: '100px',
        backgroundColor: 'black',
        color: '#fff'
    }

    return (
        <div>
          <header style={headerStyle}>
              <h1>THis is the header</h1>
          </header>  
        </div>
    )
}

export default Header;