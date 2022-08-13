import React from 'react';

import { MdSearch } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { MdCollectionsBookmark } from 'react-icons/md';

import SpotifyLogo from '../../assets/Spotify-Logo.svg';
import './LeftNavStyle.css';

const LeftNav = () => {
	return (
		<div className="navWrapper">
			<img className="image" src={SpotifyLogo} alt="Logo" />
			<div className="flexWrapper">
				<MdHome className="icon" />
				<h4>Home</h4>
			</div>
			<div className="flexWrapper" >
				<MdSearch className="icon" />
				<h4>Search</h4>
			</div>
			<div className="flexWrapper">
				<MdCollectionsBookmark className="icon" />
				<h4>Library</h4>
			</div>
		</div>
	);
};

export default LeftNav;