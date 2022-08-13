import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import AlbumCard from '../../components/AlbumCard/AlbumCard';
import TopNav from '../../components/TopNav/TopNav';

import './HomeStyle.css';

const hash = window.location.hash
	.substring(1)
	.split('&')
	.reduce(function (initial, item) {
		if (item) {
			var parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);
		}
		return initial;
	}, {});

window.location.hash = '';

export const Home = () => {
	const navigate = useNavigate();
	const retoken = localStorage.getItem('token');
	const [albums, setAlbums] = useState([]);
	const [token, setToken] = useState(retoken);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		let _token = hash.access_token;
		if (_token) {
			localStorage.setItem('token', _token);
			setToken(_token);
		} else {
			!retoken && navigate('/login');
		}
	}, []);

	useEffect(() => {
		if (token) {
			browseReleases();
		}
	}, [token]);

	const browseReleases = () => {
		axios.get('https://api.spotify.com/v1/browse/new-releases', {
			headers: {
				Authorization: `Bearer ${token}`
			},
			params: {
				country: 'IN',
				limit: 20
			}
		}).then(response => {
			if (response.data?.albums?.items) {
				setAlbums(response.data.albums.items);
			}
		})
			.catch(err => {
				if (err.response.status === 401) {
					navigate('/login');
				}
			});
	};

	const debounceFunction = (func, delay) => {
		let timer;
		return function () {
			let self = this;
			let args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(self, args);
			}, delay);
		};
	};

	const debounce = useCallback(debounceFunction((nextValue) => getSearchResults(nextValue), 1000), []);

	const getSearchResults = (value) => {
		if (value) {
			axios.get(`https://api.spotify.com/v1/search?q=${value}&type=album&`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(response => {
				if (response.data?.albums?.items) {
					setAlbums(response.data.albums.items);
				}
			})
				.catch(() => {
					localStorage.clear();
					navigate('/login');
				});
		} else {
			browseReleases();
		}
	};

	const handleCardClick = (id) => {
		if (id) {
			navigate(`/album/${id}`);
		}
	};

	const handleOnSearch = (ev) => {
		setSearchQuery(ev.target.value);
		debounce(ev.target.value);
	};

	return (
		<div className="homeWrapper">
			<div className="mainContent">
				<TopNav goBack={() => navigate(-1)} />
				<div className="sectionWrapper">
					<div className="searchWrapper">
						<h4 className="sectionTitle">Trending now</h4>
						<input className="search" type="text" placeholder="Search Albums" onChange={handleOnSearch} value={searchQuery} />
					</div>

					<div className="playlistWrapper">
						{albums.map((list, index) => <AlbumCard key={index} album={list} onCardClick={() => handleCardClick(list.id)} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
