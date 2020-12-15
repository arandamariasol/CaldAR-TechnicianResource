import React from 'react';

function Header () {
    return (
        <header style={headerStyle}>
            <h1>Technicians</h1>
        </header>
    );
};

const headerStyle = {
    background: '#fc6225',
    color: '#fff',
    padding: '1%',
    textAlign: 'center',
    borderBottom: '5px solid #232f3e',
};

export default Header;
