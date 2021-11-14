import { Container } from './styled';
import { Song } from '../../types/Song';
type Props ={
	item: Song
}//Aqui nao se coloca como array
const Page = ({item}: Props) => {
	return (
			<Container>
				<h2>{item.title} - {item.singer}</h2>
				<p>{item.body}</p>
			</Container>
		);
}
export default Page;