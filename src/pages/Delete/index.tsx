import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 
import api from '../../api';
const Page = () => {
	let { id } = useParams();//Pode vir string ou undefined
	let navigate = useNavigate();//Substituiu o useHistory
	useEffect(()=>{
		const remove = async () => {
			await api.remove(parseInt(id as string));//id pode ser uma string ou undefined, entao vc deve escolher um entre os 2 para colocar no as, depois disso converte-o para inteiro
			navigate('/lyrics-list');
		}
		remove();
	},[]);
	return null;
}

export default Page;