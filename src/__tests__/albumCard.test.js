import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AlbumCard from '../components/AlbumCard/AlbumCard';

afterEach(cleanup);

const albumData = {
	'artists': [
		{
			'id': '3kHVioJpVxlazAAKQ64pC1',
			'name': 'Yuna',
		}
	],
	'images': [
		{
			'height': 640,
			'url': 'https://i.scdn.co/image/ab67616d0000b273b1494c5d42668590efcda7a2',
			'width': 640
		},
		{
			'height': 300,
			'url': 'https://i.scdn.co/image/ab67616d00001e02b1494c5d42668590efcda7a2',
			'width': 300
		},
	],
	'name': 'Y3'
};

const AlbumJSX = <AlbumCard album={albumData} />;

it('UI testing - Album card', () => {
	const tree = renderer.create(<BrowserRouter>{AlbumJSX}</BrowserRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders Album card component', () => {
	render(AlbumJSX, {wrapper: BrowserRouter});
});

it('Should render without throwing an error', () => {
	expect(render(
		AlbumJSX, {wrapper: BrowserRouter}
	)).not.toBeNull();
});
