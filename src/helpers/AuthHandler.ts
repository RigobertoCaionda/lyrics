import Cookies from 'js-cookie';

export const doLogin = (token: string, rememberPassword: boolean = false) => {
	if (rememberPassword) {
		Cookies.set('token', token, { expires: 999 });
	} else {
		Cookies.set('token', token);
	}
}