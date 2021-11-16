import { Container } from './styled';
import { Link } from 'react-router-dom';
import { Song } from '../../types/Song';
type Props = {
	item: Song
}
const Page = ({item}: Props) => {
	return (
			<Container className="lyric">
				{item.singer} - {item.title} <Link to={`/edit/${item.title}`}>Editar</Link>
					<Link to={`/delete/${item.id}`}>Excluir</Link>
			</Container>
		);
}
export default Page;