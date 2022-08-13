import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './TrackCardStyle.css';

const TrackCard = ({ track }) => {
	const { artists, name, duration_ms, track_number } = track;
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		if (duration_ms) {
			var minutes = Math.floor(duration_ms / 60000);
			var seconds = ((duration_ms % 60000) / 1000).toFixed(0);
			setDuration(minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
		}
	}, [duration_ms]);

	return (
		<div className='tableContentWrapper'>
			<h4 className='trackCount'>{track_number}</h4>
			<div className='tableValueWrapper'>
				<h4 className='trackName'>{name}</h4>
				<div style={{ color: '#b3b3b3', lineHeight: '0.5' }}>
					{artists.map((artist, index) => (
						<div key={index} className="artistWrapper">
							<Link
								onClick={e => e.stopPropagation()}
								to={`/artist/${artist.id}/${artist.name}`}
								className="trackArtist"
							>
								{artist.name}
							</Link>
							{index !== artists.length - 1 && ', '}
						</div>
					))}
				</div>
			</div>
			<h4 className='trackDuration'>{duration}</h4>
		</div>
	);
};

TrackCard.propTypes = {
	track: PropTypes.object
};

export default TrackCard;