
import React, { useState } from 'react';

import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import Header from '../../components/Header/Header';
import CreateRecipe from '../../components/Recipes/CreateRecipe';

const { GOOGLE_CLIENT_ID } = process.env;

const CreateRecipePage: React.FC = () => {

	const [ loggedIn, setLoggedIn ] = useState(process.env.NODE_ENV !== 'production');

	const googleResponseOK = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
		setLoggedIn(true);
	};

	const googleResponseError = (error: any) => {
		setLoggedIn(false);
	};

	return (
		<>
			<Header />

			{
				!loggedIn && <div style={{textAlign: 'center'}}><GoogleLogin 
					clientId={GOOGLE_CLIENT_ID}
					buttonText="Login"
					onSuccess={googleResponseOK}
					onFailure={googleResponseError}
					cookiePolicy="single_host_origin"
				/></div>
			}

			{
				loggedIn && <CreateRecipe />
			}
		</>
	);
};

export default CreateRecipePage;
