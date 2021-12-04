import { HeaderArea, MenuArea } from './styled';
import { Link } from 'react-router-dom';
import { isLogged } from '../../helpers/AuthHandler';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
const Page = () => {
	let logged: boolean = isLogged();
	const [open, setOpen] = useState(false);

	const handleMenuIconClick = () => {
		setOpen(!open);
	}
	return (
			<HeaderArea>
				<div className="menuIcon" onClick={handleMenuIconClick}>
					<MenuIcon style={{color: '#fff', fontSize: '2.5rem'}}/>
				</div>
				<div className="logoArea"><Link to="/">My Lyrics</Link></div>
				<MenuArea open={open}>
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
				</MenuArea>
			</HeaderArea>
		);
}
export default Page;