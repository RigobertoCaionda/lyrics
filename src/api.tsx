let BASE = 'http://localhost:3001';

const obj = {
	all: async () => {
		const res = await fetch(BASE+'/lyrics');
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
				//Quando vou enviar imagens, o headers fica mesmo assim vazio
			},
			body: fData
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
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(corpo)
		});
		const json = await res.json();
		return json;
	},
	remove: async (id: number) => {
		const res = await fetch(BASE+`/delete/${id}`, {
			method: 'delete'
		});
		const json = await res.json();
		return json;
	}
}
export default obj;