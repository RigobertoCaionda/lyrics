import { Container } from './styled';
import { Link } from 'react-router-dom';
import { Song } from '../../types/Song';
type Props = {
	item: Song
}
const Page = ({item}: Props) => {
	return (
			<Container className="lyric">
				<div className="lyric-desc">{item.singer} - {item.title}</div>
					<div className="lyric-links">
						<Link to={`/edit/${item.title}`}>Editar</Link>
						<Link to={`/delete/${item.id}`}>Excluir</Link>
					</div>
			</Container>
		);
}
export default Page;