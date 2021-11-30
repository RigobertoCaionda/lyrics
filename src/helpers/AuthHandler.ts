import Cookies from 'js-cookie';

export const doLogin = (token: string, rememberPassword: boolean = false) => {
	if (rememberPassword) {
		Cookies.set('token', token, { expires: 999 });
	} else {
		Cookies.set('token', token);
	}
}

export const isLogged = () => {
	let token: string = Cookies.get('token') as string;
	return (token) ? true : false;
}

export const doLogout = () => {
	Cookies.remove('token');
}