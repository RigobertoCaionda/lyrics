import { AddLyricArea } from './styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
const Page = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [singer, setSinger] = useState('');
	const handleClick = async () => {
		const json = await api.insertLyric(title, body, singer);
		if (!json.data.error) {
			alert('Letra adicionada com sucesso!');
		} else {
			alert('Nao enviou!');
		}
	}
	return (
			<AddLyricArea>
				<input type="text" placeholder="Digite o titulo da musica" 
				value={title} onChange={e=>setTitle(e.target.value)}/>
				<textarea placeholder="Digite a letra" value={body} 
					onChange={(e)=>setBody(e.target.value)}></textarea>
				<input type="text" placeholder="Quem canta a musica?" value={singer} 
					onChange={e=>setSinger(e.target.value)}/>
				<button onClick={handleClick}>Enviar</button>

				<Link to="/lyrics-list">Ver todas as letras</Link>
			</AddLyricArea>
		);
}
export default Page;