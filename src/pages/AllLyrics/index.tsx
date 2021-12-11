import { useState, useEffect } from 'react';
import { Container } from './styled';
import Lyric from '../../components/Lyric';
import { Song } from '../../types/Song';
import api from '../../api';
import { ErrorMessage } from '../../app.styled';
import { doLogout } from '../../helpers/AuthHandler';

const Page = () => {
	const [list, setList] = useState<Song[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(()=>{
		document.title = "Lyrics | Todas";
	},[]);

	useEffect(()=>{
		const getList = async () => {
			setLoading(true);
			try {
				const json = await api.all();
				if (!json.list) {
					doLogout();
					window.location.href = '/signin';
					return;
				}
				setLoading(false);
				if (json.userData.accessLevel === 'administrador') {
					if (json.list) {
						setList(json.list);//OBS: Nunca retorne so o json, retorne o json.AtributoLaNoBackend
					} else {
						setError(json.data.error);
					}
				} else {
					setError('Somente os Administradores podem ter acesso a lista de letras!');
					setLoading(true);
				}
			} catch (error) {
				setError('Falha na requisição, verifique a sua internet!');
			}
			
		}
		getList();
	},[]);
	return (
			<Container>
				<h2>Lista completa de letras</h2>
				<div className="lyrics-list">
				{error !== '' &&
					<ErrorMessage>{ error }</ErrorMessage>
				}
					{list.length > 0 &&
						list.map((item, index)=>(
								<Lyric key={index} item={item}/>
							))
					}
					{!loading && list.length === 0 &&
						<p>Nenhuma música na lista</p>
					}
				</div>
			</Container>
		);
}
export default Page;