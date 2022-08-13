import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './AlbumCardStyle.css';

const AlbumCard = ({ album, onCardClick, from }) => {
	const { images, name, artists } = album;
	return (
		<div className="playlistCardWrapper" onClick={onCardClick}>
			<img
				src={images[1].url}
				alt="album"
				width="150px"
				className="albumImage"
			/>
			<div style={{ paddingTop: '10px', width: '190px' }}>
				<div className="title">{name}</div>
				<div style={{ color: '#b3b3b3', paddingTop: '7px', height: '40px' }}>
					{artists.map((artist, index) => (
						<div key={artist.id}>
							<Link
								onClick={e => e.stopPropagation()}
								to={from !== 'artist' && `/artist/${artist.id}/${artist.name}`}
								className="artistName"
							>
								{artist.name}
							</Link>
							{index !== artists.length - 1 && ', '}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

AlbumCard.propTypes = {
	album: PropTypes.object,
	onCardClick: PropTypes.func,
	from: PropTypes.string
};

export default AlbumCard;