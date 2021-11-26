import { Container } from './styled';
import { Song } from '../../types/Song';
type Props ={
	item: Song
}//Aqui nao se coloca como array
const Page = ({item}: Props) => {
	return (
			<Container>
				<img src={ item.image !== 'http://localhost:3001/file/null' ? item.image : 'http://localhost:3001/file/263ebc1b7b95745cb8db9cea57e7971b.jpg' } alt="" />
				<h2>{item.title} - {item.singer}</h2>
				<pre>{item.body}</pre>
			</Container>
		);
}
export default Page;