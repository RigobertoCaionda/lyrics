import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
const Page = () => {
	let logged: boolean = true;
	return (
			<HeaderArea>
				<div className="logoArea"><Link to="/">My Lyrics</Link></div>
				<div className="menuArea">
					<Link to="/">Home</Link>
					{logged &&
						<Link to="/add_lyric">Add letra</Link>
					}
					{logged &&
						<Link to="/lyrics-list">Ver todas</Link>
					}
					<Link to="/login">Login</Link>
				</div>
			</HeaderArea>
		);
}
export default Page;