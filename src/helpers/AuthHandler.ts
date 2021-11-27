import Cookies from 'js-cookie';

export const doLogin = (token: string, fullName: string, rememberPassword: boolean = false) => {
	if (rememberPassword) {
		Cookies.set('token', token, { expires: 999 });
		Cookies.set('fullName', fullName, { expires: 999 });
	} else {
		Cookies.set('token', token);
		Cookies.set('fullName', fullName);
	}
}

export const isLogged = () => {
	let token: string = Cookies.get('token') as string;
	return (token) ? true : false;
}

export const doLogout = () => {
	Cookies.remove('token');
	Cookies.remove('fullName');
}