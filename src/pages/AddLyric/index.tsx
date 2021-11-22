import { AddLyricArea } from './styled';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api';
import { ErrorMessage } from '../../app.styled';
const Page = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [singer, setSinger] = useState('');
	const [error, setError] = useState('');
	const handleClick = async () => {
		try {
			const json = await api.insertLyric(title, body, singer);
			if (!json.data.error) {
				navigate('/lyrics-list');
				setError('');
			} else {
				setError(json.data.error);
			}
		} catch(error) {
			setError('Falha na requisição!');
		}
	}
	return (
			<AddLyricArea>
				{error !== '' &&
					<ErrorMessage style={ {width: '100%'} }>{error}</ErrorMessage>
				}
				<input type="text" placeholder="Digite o titulo da musica" 
				value={title} onChange={e=>setTitle(e.target.value)}/>
				<textarea placeholder="Digite a letra" value={body} 
					onChange={(e)=>setBody(e.target.value)}></textarea>
				<input type="text" placeholder="Quem canta a musica?" value={singer} 
					onChange={e=>setSinger(e.target.value)}/>
				<button onClick={handleClick}>Enviar</button>
			</AddLyricArea>
		);
}
export default Page;