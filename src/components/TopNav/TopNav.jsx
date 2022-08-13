import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdArrowBackIosNew } from 'react-icons/md';

import SpotifyLogo from '../../assets/Spotify-Logo.svg';

import './TopNavStyle.css';

const TopNav = ({ goBack }) => {
	const navigate = useNavigate();
  
	const handleLogout = () => {
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<div className="topNavWrapper">
			<div className="arrowList">
				<MdArrowBackIosNew className="arrowWrapper" onClick={goBack} />
				<img className="image" src={SpotifyLogo} alt="Logo" />
			</div>    
			<button className="loginButton" onClick={handleLogout}>
          		Logout
			</button>
		</div>
	);
};

TopNav.propTypes = {
	goBack: PropTypes.func
};

export default TopNav;
