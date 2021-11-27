import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';

const PrivateMethod = ({ children }: {children: React.ReactElement}) => {
	const token = isLogged();
	return !token ? <Navigate to="/signin" /> : children;
}
export default PrivateMethod;