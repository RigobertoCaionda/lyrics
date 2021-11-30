import * as C from './styled';
import { useState, FormEvent } from 'react';//Para lidar com o onChange
import { ErrorMessage } from '../../app.styled';
import { doLogin } from '../../helpers/AuthHandler';
import api from '../../api';
const Page = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');

		const json = await api.login(email, password);
		if (!json.data.status) {
			setError(json.data.error);
		} else {
			doLogin(json.data.token, true);
			window.location.href = '/';
		}
	}

	return (
			<C.Container>
				<form onSubmit={handleFormSubmit}>
					{error.length > 0 &&
						<ErrorMessage style={{width: '100%'}}>{error}</ErrorMessage>
					}
					<label>
						Email:
						<input type="email" placeholder="Digite o seu email" value={email} 
							onChange={e=>setEmail(e.target.value)}/>
					</label>
					<label>
						Senha:
						<input type="password" placeholder="Digite a sua senha" value={password} 
							onChange={e=>setPassword(e.target.value)}/>
					</label>
					<input type="submit" value="Enviar" className="submitButton" />
				</form>
			</C.Container>
		);
}
export default Page;