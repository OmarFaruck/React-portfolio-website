import React from 'react';
import { FaShare,FaSearch,FaLink } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../Icon_page/Icon_page.css'
const Icon_page = () => {
    return (
        <>
            <div className="icons">
                    <NavLink to="#" className="fas fa-share"><FaShare /></NavLink>
                    <NavLink to="#" className="fas fa-link"><FaLink /></NavLink>
                    <NavLink to="#" className="fas fa-search"><FaSearch /></NavLink>
            </div>
        </>
    );
};

export default Icon_page;