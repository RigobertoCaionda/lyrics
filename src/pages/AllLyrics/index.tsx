import { useState, useEffect } from 'react';
import { Container } from './styled';
import Lyric from '../../components/Lyric';
import { Song } from '../../types/Song';
import api from '../../api';
const Page = () => {
	const [list, setList] = useState<Song[]>([]);

	useEffect(()=>{
		const getList = async () => {
			const json = await api.all();
			setList(json.list);//OBS: Nunca retorne so o json, retorne o json.AtributoLaNoBackend
		}
		getList();
	},[]);
	return (
			<Container>
				<h2>Lista completa de letras</h2>
				<div className="lyrics-list">
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