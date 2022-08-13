import React from 'react';

import SpotifyLogo from '../../assets/Spotify-Logo.svg';
import './LoginStyle.css';

const CLIENT_ID = 'b073c76191e74fb9b68399b49020d30a';
const REDIRECT_URI = 'http://192.168.1.110:8080/';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize?';
const RESPONSE_TYPE = 'token';
const scope = ['user-read-private user-read-email'];



const Login = () => {
	return (
		<div className='loginWrapper'>
			<img src={SpotifyLogo} alt="Spotify Logo" width="200px" />
			<h5>Click on the below button to login into your spotify account</h5>
			<button className="loginButton">
				<a
					href={`${AUTH_ENDPOINT}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope.join(
						'%20'
					)}&response_type=${RESPONSE_TYPE}&show_dialog=true`}
				>
                    Login
				</a>
			</button>
		</div>
	);
};

export default Login;