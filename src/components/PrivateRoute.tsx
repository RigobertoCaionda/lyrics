import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
interface Props {
	children: React.ReactNode
}
export default ({children}: Props, {...rest}: Props) => {
	const navigate = useNavigate();
	const token = false;
	if (!token) {
		navigate('/');
		return null;
	}
	return <Route {...rest}>{children}</Route>
}