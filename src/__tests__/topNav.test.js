import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TopNav from '../components/TopNav/TopNav';

afterEach(cleanup);

const TopNavJSX = <TopNav goBack={() => {}} />;

it('UI testing - Top Navigation', () => {
	const tree = renderer.create(<BrowserRouter>{TopNavJSX}</BrowserRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders Top Nav component', () => {
	render(TopNavJSX, {wrapper: BrowserRouter});
});

it('Should render without throwing an error', () => {
	expect(render(
		TopNavJSX, {wrapper: BrowserRouter}
	)).not.toBeNull();
});

it(' Check for Logout text', () => {
	const { getByText } = render(
		TopNavJSX, {wrapper: BrowserRouter}
	);
	expect(getByText('Logout')).toBeInTheDocument();
});