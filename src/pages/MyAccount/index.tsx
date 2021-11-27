import { Container } from './styled';
import Cookies from 'js-cookie';
import { doLogout } from '../../helpers/AuthHandler';
const Page = () => {
	const fullName: string = Cookies.get('fullName') as string;
	const handleLogout = () => {
		doLogout();
		window.location.href = '/';
	}
	return (
			<Container>
				<h1>Minha Conta</h1>
				{fullName &&
					<div><i>{ fullName }</i></div>
				}
				<div><button onClick={handleLogout}>Terminar sessao</button></div>
			</Container>
		);
}
export default Page;