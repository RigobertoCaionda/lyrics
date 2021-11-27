import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import { isLogged } from '../../helpers/AuthHandler';
const Page = () => {
	let logged: boolean = isLogged();
	return (
			<HeaderArea>
				<div className="logoArea"><Link to="/">My Lyrics</Link></div>
				<div className="menuArea">
					<Link to="/">Home</Link>
					{logged &&
						<Link to="/add_lyric">Novo</Link>
					}
					{logged &&
						<Link to="/lyrics-list">Todas</Link>
					}
					{!logged &&
						<Link to="/signin">Login</Link>
					}
					{!logged &&
						<Link to="/signup">Cadastrar</Link>
					}
					{logged &&
						<Link to="/my-account">Minha Conta</Link>
					}
				</div>
			</HeaderArea>
		);
}
export default Page;