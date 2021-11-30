import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import api from '../../api';
import { ErrorMessage } from '../../app.styled';
const Page = () => {
	const [error, setError] = useState('');
	let { id } = useParams();
	let navigate = useNavigate();
	let remItem: boolean = window.confirm("Deseja realmente eliminar este usuario?");;
	
	const removeUser = async () => {
		if (remItem) {
				await api.removeUser(parseInt(id as string));
				navigate('/my-account');
		} else {
			navigate('/my-account');
		}
			
		}

	useEffect(()=>{
		const getLoggedUser = async () => {
			try {
				const json = await api.getLoggedUser();
				if (json.data.userData) {
					if (json.data.userData.accessLevel === 'administrador') {
						removeUser();
					} else {
						setError('So administradores podem apagar usuarios!');
					}
				} else {
					setError(json.data.error);
				}
			} catch (error: any) {
				setError(error.message);
			}
		}
		getLoggedUser();
	}, []);

	return error !== '' ? <ErrorMessage style={{ width: '600px', margin: 'auto' }}>{error}</ErrorMessage> : null;
}

export default Page;