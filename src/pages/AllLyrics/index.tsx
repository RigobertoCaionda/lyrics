import { useState, useEffect } from 'react';
import { Container } from './styled';
import Lyric from '../../components/Lyric';
import { Song } from '../../types/Song';
import api from '../../api';
import { ErrorMessage } from '../../app.styled';
const Page = () => {
	const [list, setList] = useState<Song[]>([]);
	const [error, setError] = useState('');

	useEffect(()=>{
		const getList = async () => {
			try {
				const json = await api.all();
				if (json.userData.accessLevel === 'administrador') {
					if (json.list) {
						setList(json.list);//OBS: Nunca retorne so o json, retorne o json.AtributoLaNoBackend
					} else {
						setError(json.data.error);
					}
				} else {
					setError('Somente os Administradores podem ter acesso a lista de letras!');
				}
			} catch (error) {
				setError('Falha na requisicao, verifique a sua internet!');
			}
			
		}
		getList();
	},[]);
	return (
			<Container>
				<h2>Lista completa de letras</h2>
				<div className="lyrics-list">
				{error !== '' &&
					<ErrorMessage style={{ width: '685px' }}>{ error }</ErrorMessage>
				}
					{list.length > 0 &&
						list.map((item, index)=>(
								<Lyric key={index} item={item}/>
							))
					}
				</div>
			</Container>
		);
}
export default Page;