import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
const Page = () => {
	let logged: boolean = false;
	return (
			<HeaderArea>
				<div className="logoArea"><Link to="/">My Lyrics</Link></div>
				<div className="menuArea">
					<Link to="/">Home</Link>
					{logged &&
						<Link to="/add_lyric">Adicionar letra</Link>
					}
					<Link to="/login">Login</Link>
				</div>
			</HeaderArea>
		);
}
export default Page;