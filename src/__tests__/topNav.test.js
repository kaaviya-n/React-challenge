import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TopNav from '../components/TopNav/TopNav';

afterEach(cleanup);

const TopNavJSX = <TopNav goBack={() => {}} />;

it('UI testing - Top Navigation', () => {
	const tree = renderer.create(<HashRouter>{TopNavJSX}</HashRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders Top Nav component', () => {
	render(TopNavJSX, {wrapper: HashRouter});
});

it('Should render without throwing an error', () => {
	expect(render(
		TopNavJSX, {wrapper: HashRouter}
	)).not.toBeNull();
});

it(' Check for Logout text', () => {
	const { getByText } = render(
		TopNavJSX, {wrapper: HashRouter}
	);
	expect(getByText('Logout')).toBeInTheDocument();
});