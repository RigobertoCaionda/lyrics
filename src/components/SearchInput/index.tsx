import { Container } from './styled';
import { useState,KeyboardEvent } from 'react';
import api from '../../api';
import {Song } from '../../types/Song';
import { ErrorMessage } from '../../app.styled';
import MicIcon from '@material-ui/icons/Mic';

type Props = {
	setSong: (song: Song[]) => void
}
const Page = ({ setSong }: Props) => {
	let recognition: any = null;
	let SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
	if (SpeechRecognition !== undefined) {
		recognition = new SpeechRecognition();
	}
	const [search, setSearch] = useState('');
	const [error, setError] = useState('');
	const [listening, setListening] = useState(false);

	const getOneSong = async () => {
			try {
				if (search !== '') {
					setSong([]);
					const json = await api.getOne(search);
					if (!json.data.error) {
					setSong([json.data]);//Tem que estar em array
					setError('');
				} else {
					setSong([]);
					setError('Letra não encontrada!');
				}
				}
				
			} catch(error) {
				setSong([]);
				setError('Falha na requisição, verifique sua internet!');
			}
		}

	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.keyCode === 13) {
			getOneSong();
			setSearch('');
		}
	}

	const handleMicClick = () => {
		if (recognition !== null) {
			recognition.onstart = () => {
				setListening(true);
			}
			recognition.onend = () => {
				setListening(false);
			}
			recognition.onresult = (e: any) => {
				const getOneSong = async () => {
				try {
					const json = await api.getOne(e.results[0][0].transcript);
					if (!json.data.error) {
					setSong([json.data]);//Tem que estar em array
					setError('');
					} else {
						setSong([]);
						setError('Letra não encontrada. Procure pronunciar corretamente as palavras!');
					}
				
				} catch(error) {
					setError('Falha na requisição, verifique sua internet!');
				}
		}
		getOneSong();
			}
			recognition.start();
		}
	}

	return (
			<Container>
					{error !== '' &&
						<ErrorMessage>{error}</ErrorMessage>
					}
					<div className="wrapper">
						<input type="text" placeholder="Procurar letra de música" 
						value={search} onChange={e=>setSearch(e.target.value)} 
							onKeyUp={handleKeyUp}/>
						<div className="mic" onClick={handleMicClick}>
							<MicIcon style={{color: listening ? '#126ece' : '#919191'}}/>
						</div>
					</div>
			</Container>
		)
}
export default Page;