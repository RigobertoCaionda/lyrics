import { AddLyricArea } from './styled';
import { useState, FormEvent, useEffect } from 'react';
import api from '../../api';
import { ErrorMessage, SuccessMessage } from '../../app.styled';
import { doLogout } from '../../helpers/AuthHandler';

const Page = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [singer, setSinger] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [file, setFile] = useState();

	useEffect(()=>{
		document.title = "Lyrics | Nova letra";
	},[]);
	const handleInputFileChange = (e: any) => {
		setFile(e.target.files[0]);
	}

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisabled(true);
		setError('');
		setSuccess('');
		let errors: string[] = [];
		if (!title.trim()) {
			errors.push('Digite um titulo!');
		}
		if (!body.trim()) {
			errors.push('Digite a letra da música!');
		}
		if (!singer.trim()) {
			errors.push('Digite o nome do cantor!');
		}
		if (errors.length === 0) {
			const fData = new FormData();
			fData.append('title', title);
			fData.append('body', body);
			fData.append('singer', singer);
			fData.append('avatar', file ? file : '');
		try {
			const json = await api.insertLyric(fData);
			if (json.data.error === 'Nao autorizado!') {
					doLogout();
					window.location.href = '/signin';
					return;
				}
			if (!json.data.error) {
				setSuccess('Cadastro feito com sucesso!');
				setError('');
			} else {
				setError(json.data.error);
				setSuccess('');
			}
		} catch(error) {
			setError('Falha na requisição!');
			setSuccess('');
		}

		} else {
			setError(errors.join("\n"));
			setSuccess('');
		}
		setDisabled(false);
	}
	return (
			<AddLyricArea>
				{error !== '' &&
					<ErrorMessage style={ {width: '100%'} }>{error}</ErrorMessage>
				}
				{success !== '' &&
					<SuccessMessage style={ {width: '100%'} }>{success}</SuccessMessage>
				}
				<h2>Cadastrar letra</h2>
				<form onSubmit={handleFormSubmit }>
					<label>Título da música</label>
					<input type="text" placeholder="Digite o título da música" 
						value={title} onChange={e=>setTitle(e.target.value)} disabled={disabled}
						autoFocus />
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