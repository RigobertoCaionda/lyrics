import { Container } from './styled';
import { doLogout } from '../../helpers/AuthHandler';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import api from '../../api';
import UserComponent from '../../components/UserComponent';
const Page = () => {
	const [loggedUser, setLoggedUser] = useState('');
	const [access, setAccess] = useState('');
	const [list, setList] = useState<User[]>([]);
	const [loggedUserId, setLoggedUserId] = useState('');
	const [user, setUser] = useState([]);
	useEffect(()=>{
		const getLoggedUser = async () => {
			try {
				const json = await api.getLoggedUser();
				if (json.data.userData) {
					let fullName: string = `${json.data.userData.name} ${json.data.userData.lastName}`;
					setLoggedUser(fullName);
					setAccess(json.data.userData.accessLevel);
					setLoggedUserId(json.data.userData.id_user);
				} else {
					console.log(json.data.error);
				}
			} catch (error: any) {//Recentemente o ts foi atualizado, agora os erros sao do tipo unknown e vc precisa defini-los com any
				console.log(error.message);
			}
		}
		getLoggedUser();
	}, []);

		useEffect(()=>{
		const getList = async () => {
			try {
				const json = await api.getList();
				if (json.data.list) {
					setList(json.data.list);
				} else {
					console.log(json.data.error);
				}
			} catch (error: any) {
				console.log(error.message);
			}
		}
		getList();
	}, []);

	const handleLogout = () => {
		doLogout();
		window.location.href = '/';
	}
	return (
			<Container>
				<h1>Minha Conta</h1>
				{loggedUser !== '' &&
					<div className="fullName">
						Proprietário: <i>{ loggedUser }</i>
					</div>
				}
				{access !== '' &&
					<div className="permission">Permissão: {access}</div>
				}
				{access === 'administrador' &&
					<div className="add_adm">
						<Link to="/signupadm">Adicionar membros</Link>
					</div>
				}
				{access === 'administrador' &&
					<div className="usersList">
						<h2>Lista de usuários</h2>
						{list.length > 0 &&
							list.map((item, index)=>(
									<UserComponent key={index} item={item}/>
								))
						}
					</div>
				}
				<div className="logout">
					<button onClick={handleLogout}>Terminar sessao</button>
				</div>
			</Container>
		);
}
export default Page;