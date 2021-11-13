import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
const Page = () => {
	return (
			<HeaderArea>
				<div className="logoArea"><Link to="/">My Lyrics</Link></div>
				<div className="menuArea">
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
				</div>
			</HeaderArea>
		);
}
export default Page;