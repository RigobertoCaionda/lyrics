import { Container } from './styled';
import { useState,KeyboardEvent } from 'react';
import api from '../../api';
import {Song } from '../../types/Song';
type Props = {
	setSong: (song: Song[]) => void
}
const Page = ({ setSong }: Props) => {
	const [search, setSearch] = useState('');
	const getOneSong = async () => {
			try {
				const json = await api.getOne(search);
				if (!json.data.error) {
					setSong([json.data]);//Tem que estar em array
				} else {
					setSong([]);//Se tiver erro retorno um array vazio para apagar a letra que estava la
					alert('Letra nao encontrada!');
				}
			} catch(error) {
				alert('Deu erro: '+error);
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
					<input type="search" placeholder="Procurar letra de música" value={search} 
							onChange={e=>setSearch(e.target.value)} 
							onKeyUp={handleKeyUp}/>
			</Container>
		)
}
export default Page;