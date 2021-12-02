import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 
import api from '../../api';
const Page = () => {
	let { id } = useParams();//Pode vir string ou undefined
	let navigate = useNavigate();//Substituiu o useHistory
	let remItem: boolean = window.confirm("Deseja realmente apagar essa letra?");//No react usa-se window.confirm
	const remove = async () => {
			try {
				const json = await api.remove(parseInt(id as string));//id pode ser uma string ou undefined, entao vc deve escolher um entre os 2 para colocar no as, depois disso converte-o para inteiro
				navigate('/lyrics-list');
			} catch(error) {
				console.log('Falha na requisição, verifique sua internet');
			}
		}

	useEffect(()=>{
		if (remItem) {
			remove();
		} else {
			navigate('/lyrics-list');
		}
		// eslint-disable-next-line
	},[]);

	return null;
}

export default Page;