import * as C from './styled';
import { useState, FormEvent } from 'react';//Para lidar com o onChange
import { ErrorMessage, SuccessMessage } from '../../app.styled';
import api from '../../api';
import {useEffect } from 'react';
const Page = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [accessLevel, setAccessLevel] = useState('');
	const [error, setError] = useState('');
	const [success, setSucess] = useState('');
	const [access, setAccess] = useState('');

	useEffect(()=>{
		const getLoggedUser = async () => {
			try {
				const json = await api.getLoggedUser();
				if (json.data.userData) {
					setAccess(json.data.userData.accessLevel);
				} else {
					console.log(json.data.error);
				}
			} catch (error: any) {//Recentemente o ts foi atualizado, agora os erros sao do tipo unknown e vc precisa defini-los com any
				console.log(error.message);
			}
		}
		getLoggedUser();
	}, []);
	
	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setSucess('');
		if (password !== confirmPassword) {
			setError('a senha e o confirmar senha sao diferentes');
			setSucess('');
			return;
		}

		if (access !== '' && access === 'administrador') {
				const json = await api.registerAdm(name, lastName, email, password, confirmPassword, accessLevel);
				if (!json.id) {
					setError(json.data.error);
					setSucess('');
				} else {
					setSucess('Cadastro feito com sucesso!');
					setError('');
				}
			} else {
				setError('So os Administradores podem cadastrar aqui!');
				setSucess('');
			}
		}

	return (
			<C.Container>
				<form onSubmit={handleFormSubmit}>
					{error.length > 0 &&
						<ErrorMessage style={{width: '100%'}}>{error}</ErrorMessage>
					}
					{success.length > 0 &&
						<SuccessMessage style={{width: '100%'}}>{success}</SuccessMessage>
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
						Email:
						<input type="email" placeholder="Digite o seu email" value={email} 
							onChange={e=>setEmail(e.target.value)}/>
					</label>
					<label>
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