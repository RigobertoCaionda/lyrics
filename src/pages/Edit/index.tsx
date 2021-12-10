import { Container } from './styled';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';//No react-router-dom v6 useHistory e useNavigate
import { Song } from '../../types/Song';
import api from '../../api';
import { ErrorMessage, SuccessMessage } from '../../app.styled';
import { doLogout } from '../../helpers/AuthHandler';
const Page = () => {
	const [lyric, setLyric] = useState<Song[]>([]);
	const [id, setId] = useState(0);
	const [songTitle, setSongTitle] = useState('');
	const [body, setBody] = useState('');
	const [singer, setSinger] = useState('');
	// eslint-disable-next-line
	const [loading, setLoading] = useState(true);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	let { title } = useParams();
	useEffect(()=>{
		 const editLyric = async () => {
		 	try {
		 		const json = await api.getOne(title as string);//Title pode vir em string ou undefined e como o ts nao sabe se vira qual, entao ele reclama, por isso devemos colocar as string (type assertions)
			 	setLoading(false);
			 	setLyric([json.data]);
		 	} catch(error) {
		 		setError('Falha na requisição, verifique sua internet!');
		 		setSuccess('');
		 	}
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
		setDisabled(true);
		const json = await api.update(id, songTitle, body, singer);
		if (json.data.error === 'Nao autorizado!') {
					doLogout();
					window.location.href = '/signin';
					return;
			}
		if (!json.data.error) {
			setSuccess('Atualização feita com sucesso!');
			setError('');
		} else {
			setError('Falha na atualização!');
			setSuccess('');
		}
		setDisabled(false);
	}

	return (
			<Container>
				<h2>Editar música</h2>
					<form onSubmit={handleFormSubmit}>
					{error !== '' &&
						<ErrorMessage style={{width: '100%'}}>{error}</ErrorMessage>
					}
					{success !== '' &&
						<SuccessMessage style={{width: '100%'}}>{success}</SuccessMessage>
					}
						<input type="text" disabled={true} value={id}/>
						<input type="text" value={songTitle} 
							onChange={e=>setSongTitle(e.target.value)} disabled={disabled} />
						<textarea value={body} onChange={e=>setBody(e.target.value)}
							disabled={disabled}></textarea>
						<input type="text" value={singer} onChange={e=>setSinger(e.target.value)}
							disabled={disabled}/>
						<button disabled={disabled}>Atualizar</button>
					</form>
			</Container>
		);
}
export default Page;