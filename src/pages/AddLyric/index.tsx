import { AddLyricArea } from './styled';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { ErrorMessage } from '../../app.styled';
const Page = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [singer, setSinger] = useState('');
	const [error, setError] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [file, setFile] = useState();

	const handleInputFileChange = (e: any) => {
		setFile(e.target.files[0]);
	}

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisabled(true);
		setError('');
		let errors: string[] = [];
		if (!title.trim()) {
			errors.push('Sem titulo!');
		}
		if (!body.trim()) {
			errors.push('Sem Corpo!');
		}
		if (!singer.trim()) {
			errors.push('Sem nome do cantor!');
		}
		if (errors.length === 0) {
			const fData = new FormData();
			fData.append('title', title);
			fData.append('body', body);
			fData.append('singer', singer);
			fData.append('avatar', file ? file : '');
		try {
			const json = await api.insertLyric(fData);
			if (!json.data.error) {
				navigate('/lyrics-list');
				setError('');
			} else {
				setError(json.data.error);
			}
		} catch(error) {
			setError('Falha na requisição!');
		}

		} else {
			setError(errors.join("\n"));
		}
		setDisabled(false);
	}
	return (
			<AddLyricArea>
				{error !== '' &&
					<ErrorMessage style={ {width: '100%'} }>{error}</ErrorMessage>
				}
				<form onSubmit={handleFormSubmit }>
					<label>Título da música</label>
					<input type="text" placeholder="Digite o título da música" 
						value={title} onChange={e=>setTitle(e.target.value)} disabled={disabled}/>
					<label>Letra</label>
					<textarea placeholder="Digite a letra da música" value={body} 
					onChange={(e)=>setBody(e.target.value)} disabled={disabled}></textarea>
					<label>Cantor</label>
					<input type="text" placeholder="Quem canta essa música?" value={singer} 
					onChange={e=>setSinger(e.target.value)} disabled={disabled}/>
					<label>Imagem do cantor</label>
					<input type="file" disabled={disabled} onChange={handleInputFileChange}/>
					<button type="submit" disabled={disabled}>Enviar</button>
				</form>
			</AddLyricArea>
		);
}
export default Page;