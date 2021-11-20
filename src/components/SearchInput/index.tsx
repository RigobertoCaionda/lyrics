import { Container } from './styled';
import { useState,KeyboardEvent } from 'react';
import api from '../../api';
import {Song } from '../../types/Song';
import { ErrorMessage } from '../../app.styled';
type Props = {
	setSong: (song: Song[]) => void
}
const Page = ({ setSong }: Props) => {
	const [search, setSearch] = useState('');
	const [error, setError] = useState('');
	const getOneSong = async () => {
			try {
				const json = await api.getOne(search);
				if (!json.data.error) {
					setSong([json.data]);//Tem que estar em array
					setError('');
				} else {
					setSong([]);//Se tiver erro retorno um array vazio para apagar a letra que estava la
					setError('Letra não encontrada!');
				}
			} catch(error) {
				setError('Falha na requisição, verifique sua internet!');
			}
		}

	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.keyCode === 13) {
			getOneSong();
			setSearch('');
		}
	} 
	return (
			<Container>
					{error !== '' &&
						<ErrorMessage>{error}</ErrorMessage>
					}
					<input type="search" placeholder="Procurar letra de música" value={search} 
							onChange={e=>setSearch(e.target.value)} 
							onKeyUp={handleKeyUp}/>
			</Container>
		)
}
export default Page;