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
			const json = await api.getOne(search);
			console.log(json)
			setSong(json);
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