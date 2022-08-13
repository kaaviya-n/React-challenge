import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import TopNav from '../../components/TopNav/TopNav';
import AlbumCard from '../../components/AlbumCard/AlbumCard';

import './ArtistStyle.css';

const Artist = () => {
	const { id, name } = useParams();
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		if (token && id) {
			axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(response => {
				if (response.data?.items) {
					console.log(response.data);
					setAlbums(response.data.items);
				}
			})
				.catch(err => console.warn(err));
		} else {
			navigate('/login');
		}
	}, []);

	const handleCardClick = (id) => {
		if(id) {
			navigate(`/album/${id}`);
		} 
	};

	return (
		<div className='albumWrapper'>
			<div className="mainContent">
				<TopNav goBack={() => navigate(-1)} />
				<div className="sectionWrapper">
					<h4 className="sectionTitle">{`More by ${name}`}</h4>
					<div className="playlistWrapper">
						{albums.map((list, index) => <AlbumCard key={index} album={list} from="artist" onCardClick={() => handleCardClick(list.id)} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Artist;