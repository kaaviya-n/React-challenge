import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Album from './pages/Album/Album';
import Artist from './pages/Artist/Artist';
import Login from './pages/Login/Login';

import './global.css';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path={'/'} element={<Home />} />
					<Route path="/album/:id" element={<Album />} />
					<Route path="/artist/:id/:name" element={<Artist />} />
				</Routes>
			</BrowserRouter>
		</>

	);
};

export default App;