import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <FontAwesomeIcon icon={faGlobeAfrica} transform='grow-25'/> 
            <h3>my travel journal</h3>
        </header>
    );
}

export default Header;