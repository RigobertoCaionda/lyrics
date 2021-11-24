import { Container } from './styled';
import { FormEvent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';//No react-router-dom v6 useHistory e useNavigate
import { Song } from '../../types/Song';
import api from '../../api';
import { ErrorMessage } from '../../app.styled';
const Page = () => {
	let navigate = useNavigate();//Em vez de useHistory agora e useNavigate
	const [lyric, setLyric] = useState<Song[]>([]);
	const [id, setId] = useState(0);
	const [songTitle, setSongTitle] = useState('');
	const [body, setBody] = useState('');
	const [singer, setSinger] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	let { title } = useParams();
	useEffect(()=>{
		 const editLyric = async () => {
		 	const json = await api.getOne(title as string);//Title pode vir em string ou undefined e como o ts nao sabe se vira qual, entao ele reclama, por isso devemos colocar as string (type assertions)
		 	 setLoading(false);
		 	 setLyric([json.data]);
		 }
		 editLyric();
		 // eslint-disable-next-line
	},[]);

	useEffect(()=>{
		if (lyric.length > 0) {
			setSongTitle(lyric[0].title);
			setId(lyric[0].id);
			setBody(lyric[0].body);
			setSinger(lyric[0].singer);
		}
		// eslint-disable-next-line
	},[lyric.length]);//Passo inteligente para nao dar erro ao colocar essas props do if, uma vez que elas ainda nao existirao
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const json = await api.update(id, songTitle, body, singer);
		if (!json.data.error) {
			navigate('/lyrics-list');//E assim que funciona o navigate da versao 6 do react-router-dom
			setError('');
		} else {
			setError('Falha na atualização!');
		}

	}
	return (
			<Container>
				<h2>Pagina de edicao</h2>
					<form onSubmit={handleFormSubmit}>
					{error !== '' &&
						<ErrorMessage style={{width: '100%'}}>{error}</ErrorMessage>
					}
						<input type="text" disabled={true} value={id}/>
						<input type="text" value={songTitle} 
							onChange={e=>setSongTitle(e.target.value)} disabled={loading} />
						<textarea value={body} onChange={e=>setBody(e.target.value)}
							disabled={loading}></textarea>
						<input type="text" value={singer} onChange={e=>setSinger(e.target.value)}
							disabled={loading}/>
						<button disabled={loading}>Atualizar</button>
					</form>
			</Container>
		);
}
export default Page;