import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TrackCard from '../components/TrackCard/TrackCard';

afterEach(cleanup);

const trackList = {
	'artists': [
		{
			'id': '4zCH9qm4R2DADamUHMCa6O',
			'name': 'Anirudh Ravichander',
		}
	],
	'duration_ms': 218823,
	'id': '6FQQiTpYnfc5803p84bQp1',
	'name': 'Vikram - Title Track',
	'track_number': 2
};

const TrackCardJSX = <TrackCard track={trackList} />;

it('UI testing - Track card', () => {
	const tree = renderer.create(<BrowserRouter>{TrackCardJSX}</BrowserRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders Track card component', () => {
	render(TrackCardJSX, {wrapper: BrowserRouter});
});

it('Should render without throwing an error', () => {
	expect(render(
		TrackCardJSX, {wrapper: BrowserRouter}
	)).not.toBeNull();
});
