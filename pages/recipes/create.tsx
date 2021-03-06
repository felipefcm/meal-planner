
import { Typography } from '@material-ui/core';
import React, { useState } from 'react';

import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

import Header from '../../components/Header/Header';
import CreateRecipe from '../../components/Recipes/CreateRecipeForm';

const { NEXT_PUBLIC_GOOGLE_CLIENT_ID } = process.env;

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
				!loggedIn && 
				<div style={{textAlign: 'center'}}>
					<Typography>Please log in to create recipes</Typography>
					<GoogleLogin 
						clientId={NEXT_PUBLIC_GOOGLE_CLIENT_ID}
						buttonText="Login"
						onSuccess={googleResponseOK}
						onFailure={googleResponseError}
						cookiePolicy="single_host_origin"
					/>
				</div>
			}

			{
				loggedIn && <CreateRecipe />
			}
		</>
	);
};

export default CreateRecipePage;
