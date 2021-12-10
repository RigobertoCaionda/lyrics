import { Container } from './styled';
import { Link } from 'react-router-dom';
import { User } from '../../types/User';
type Props = {
	item: User
}
const Page = ({item}: Props) => {
	return (
			<Container>
				<div className="user-desc">{item.name} {item.lastName}</div>
					<div className="user-links">
						<Link to={`/edit_user/${item.id_user}`}>Editar</Link>
						<Link to={ item.email === 'rigobertocaionda98@gmail.com' ? '' : 
							`/delete_user/${item.id_user}`}>Excluir</Link>
					</div>
			</Container>
		);
}
export default Page;