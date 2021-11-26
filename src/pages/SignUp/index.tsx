import * as C from './styled';
import { useState, FormEvent } from 'react';//Para lidar com o onChange
import { ErrorMessage } from '../../app.styled';
import { doLogin } from '../../helpers/AuthHandler';
import api from '../../api';
const Page = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [accessLevel, setAccessLevel] = useState('');
	const [error, setError] = useState('');
	
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		if (password !== confirmPassword) {
			setError('a senha e o confirmar senha sao diferentes');
			return;
		}

		const json = await api.register(name, lastName, email, password, confirmPassword, accessLevel);
		if (!json.id) {
			setError(json.data.error);
		} else {
			doLogin(json.token);
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
						Nome:
						<input type="text" placeholder="Digite o seu nome" value={name} 
							onChange={e=>setName(e.target.value)}/>
					</label>
					<label>
						Sobrenome:
						<input type="text" placeholder="Digite o seu sobrenome" value={lastName} 
							onChange={e=>setLastName(e.target.value)}/>
					</label>
					<label>
					<label>
						Email:
						<input type="email" placeholder="Digite o seu email" value={email} 
							onChange={e=>setEmail(e.target.value)}/>
					</label>
						Senha:
						<input type="password" placeholder="Digite a sua senha" value={password} 
							onChange={e=>setPassword(e.target.value)}/>
					</label>
					<label>
						Confirmar senha:
						<input type="password" placeholder="Confirme a sua senha" value={confirmPassword} 
							onChange={e=>setConfirmPassword(e.target.value)}/>
					</label>
					<label>
						Niveis de acesso:
						<select onChange={e=>setAccessLevel(e.target.value)}>
							<option value=""></option>
							<option value="usuario">usuário</option>
							<option value="administrador">Administrador</option>
						</select>
					</label>

					<input type="submit" value="Enviar" className="submitButton" />
				</form>
			</C.Container>
		);
}
export default Page;