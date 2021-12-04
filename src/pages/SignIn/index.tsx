import * as C from './styled';
import { useState, FormEvent } from 'react';//Para lidar com o onChange
import { ErrorMessage } from '../../app.styled';
import { doLogin } from '../../helpers/AuthHandler';
import api from '../../api';
const Page = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [keepLogged, setKeepLogged] = useState(false);
	const [disabled, setDisabled] = useState(false);
	
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setDisabled(true);
		try {
			const json = await api.login(email, password);
		if (!json.data.status) {
			setError(json.data.error);
			} else {
				doLogin(json.data.token, keepLogged);
				window.location.href = '/';
			}
		} catch(error) {
			setError('Falha na requisição!');
		}
		setDisabled(false);
	}

	return (
			<C.Container>
				<h1>Login</h1>
				<form onSubmit={handleFormSubmit}>
					{error.length > 0 &&
						<ErrorMessage style={{width: '100%'}}>{error}</ErrorMessage>
					}
					<label>
						Email:
						<input type="email" placeholder="Digite o seu email" value={email} 
							onChange={e=>setEmail(e.target.value)} disabled={disabled} autoFocus/>
					</label>
					<label>
						Senha:
						<input type="password" placeholder="Digite a sua senha" value={password} 
							onChange={e=>setPassword(e.target.value)} disabled={disabled}/>
					</label>
					<label style={{display: 'inline'}}>
						Permanecer logado:
						<input type="checkbox" checked={keepLogged} 
							onChange={()=>setKeepLogged(!keepLogged)} disabled={disabled}/>
					</label>
					<input type="submit" value="Enviar" className="submitButton" 
						disabled={disabled}/>
				</form>
			</C.Container>
		);
}
export default Page;