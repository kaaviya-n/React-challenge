import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { MdTimer } from 'react-icons/md';

import TopNav from '../../components/TopNav/TopNav';
import TrackCard from '../../components/TrackCard/TrackCard';

import './AlbumStyle.css';

const Album = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		if (token && id) {
			axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(response => {
				if (response.data?.items) {
					setTracks(response.data.items);
				}
			})
				.catch(err => console.warn(err));
		} else {
			navigate('/login');
		}
	}, []);
	return (
		<div className='albumWrapper'>
			<div className="mainContent">
				<TopNav goBack={() => navigate(-1)} />
				<div className="sectionWrapper">
					<h4 className='trackHeader'>Tracks</h4>
					<div className="tableWrapper">
						<div className='tableHeadWrapper'>
							<div className='tableTitle'>
								<h4>#</h4>
								<h4>TITLE</h4>
							</div>
							<MdTimer className='timerIcon' />
						</div>
						<div className='tableBodyWrapper'>
							<div>
								{tracks.map((list, index) => <TrackCard key={index} track={list} />)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Album;