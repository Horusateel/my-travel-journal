import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <FontAwesomeIcon icon={faGlobeAfrica} transform='grow-40'/> 
            <h1>my travel journal</h1>
        </header>
    );
}

export default Header;