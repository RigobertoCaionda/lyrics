import Cookies from 'js-cookie';

let BASE = 'http://localhost:3001';

let token: string = Cookies.get('token') as string;
const obj = {
	all: async () => {
		const res = await fetch(BASE+'/lyrics', {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		const json = await res.json();
		return json;
	},
	getOne: async (search: string) => {
		const res = await fetch(BASE+`/lyric/${search}`);
		const json = await res.json();
		return json;
	},
	insertLyric: async (fData: FormData) => {//Recebemos um formData quando vamos enviar arquivos
		const res = await fetch(BASE+'/add', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${token}`
			},
			body: fData
		});
		const json = await res.json();
		return json;
	},
	register: async (name: string, lastName: string, email: string, password: string, 
		confirmPassword: string, accessLevel: string) => {
			let corpo = {
				name,
				lastName,
				email,
				password,
				confirmPassword,
				accessLevel
			};

			const res = await fetch(BASE+'/register', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(corpo)
			});
			const json = await res.json();
			return json;
	},
	login: async (email: string, password: string) => {
		let corpo = {
			email,
			password
		};
		const res = await fetch(BASE+'/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(corpo)
		});
		const json = await res.json();
		return json;
	},
	update: async (id: number, title: string, body: string, singer: string) => {
		let corpo = {
			id,
			title,
			body,
			singer
		};
		const res = await fetch(BASE+'/update', {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(corpo)
		});
		const json = await res.json();
		return json;
	},
	remove: async (id: number) => {
		const res = await fetch(BASE+`/delete/${id}`, {
			method: 'delete',
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		const json = await res.json();
		return json;
	}
}
export default obj;