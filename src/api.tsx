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
	}
}
export default obj;