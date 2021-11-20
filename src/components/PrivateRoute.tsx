import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateMethod = ({ children }: {children: React.ReactElement}) => {
	const token = true;
	return !token ? <Navigate to="/" /> : children;
}
export default PrivateMethod;