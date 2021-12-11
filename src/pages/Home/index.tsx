import { HomeArea } from './styled';
import SearchInput from '../../components/SearchInput';
import LyricsComponent from '../../components/LyricsComponent';
import { useState, useEffect } from 'react';
import { Song } from '../../types/Song';
const Page = () => {
	useEffect(()=>{
		document.title = "Lyrics | Home";
	},[]);
	const [song, setSong] = useState<Song[]>([]);//Array das musicas achadas
	return (
			<HomeArea>
				<SearchInput setSong={setSong}/>
				{song.length > 0 &&
					song.map((item, index)=>(
							<LyricsComponent item={item} key={index}/>
						))
				}
			</HomeArea>
		);
}
export default Page;