import { Container } from './styled';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../types/User';
import api from '../../api';
import { ErrorMessage, SuccessMessage } from '../../app.styled';
import { doLogout } from '../../helpers/AuthHandler';
const Page = () => {
	const [user, setUser] = useState<User[]>([]);
	const [id_user, setId_user] = useState(0);
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [accessLevel, setAccessLevel] = useState('');
	const [loading, setLoading] = useState(true);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [adm, setAdm] = useState<User[]>([]);

	let { id } = useParams();
	useEffect(()=>{
		 const editUser = async () => {
		 	try {
		 		const json = await api.getOneUser(id as string);
		 		setAdm([json.userData]);
			 	setLoading(false);
			 	setUser([json.data]);
		 	} catch(error) {
		 		setError('Falha na requisição, verifique sua internet!');
		 		setSuccess('');
		 	}
		 }
		 editUser();
		 // eslint-disable-next-line
	},[]);

	useEffect(()=>{
		if (user.length > 0) {
			setName(user[0].name);
			setId_user(user[0].id_user);
			setLastName(user[0].lastName);
			setEmail(user[0].email);
			setPassword(user[0].password);
			setAccessLevel(user[0].accessLevel);
		}
		// eslint-disable-next-line
	},[user.length]);//Passo inteligente para nao dar erro ao colocar essas props do if, uma vez que elas ainda nao existirao

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setSuccess('');
		setDisabled(true);
		if (adm[0].accessLevel === 'administrador') {
			const json = await api.updateUser(id_user, name, lastName, email, password, accessLevel);
			if (json.data.error === 'Nao autorizado!') {
					doLogout();
					window.location.href = '/signin';
					return;
			}
			if (!json.data.error) {
				setSuccess('Usuário atualizado com sucesso!');
				setError('');
			} else {
				setError('Falha na atualização!');
				setSuccess('');
			}
		} else {
			setError('So os administradores podem editar usuários aqui!');
			setSuccess('');
		}
		setDisabled(false);
	}

	return (
			<Container>
				<h2>Editar usuários</h2>
					<form onSubmit={handleFormSubmit}>
					{error !== '' &&
						<ErrorMessage style={{width: '100%'}}>{error}</ErrorMessage>
					}
					{success !== '' &&
						<SuccessMessage style={{width: '100%'}}>{success}</SuccessMessage>
					}
						<input type="text" disabled={true} value={id}/>
						<input type="text" value={name} 
							onChange={e=>setName(e.target.value)} disabled={disabled} />
						<input type="text" value={lastName} onChange={e=>setLastName(e.target.value)}
							disabled={disabled} />
						<input type="email" value={email} onChange={e=>setEmail(e.target.value)}
							disabled={disabled}/>
							<input type="text" value={password} onChange={e=>setPassword(e.target.value)}
							disabled={disabled}/>
							<select onChange={e=>setAccessLevel(e.target.value)} disabled={disabled}>
								<option value=""></option>
								<option value="usuario">usuário</option>
								<option value="administrador">Administrador</option>
						</select>
						<button disabled={disabled}>Atualizar</button>
					</form>
			</Container>
		);
}
export default Page;