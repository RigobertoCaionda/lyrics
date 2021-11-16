import {Routes, Route} from 'react-router-dom';//As coisas mudaram, agora Routes substitui o Switch
import Home from './pages/Home';
import AddLyric from './pages/AddLyric';
import AllLyrics from './pages/AllLyrics';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
const Page = () => {
	return (
			<Routes>
				<Route  path="/" element={<Home />} />
				<Route path="/add_lyric" element={<AddLyric />} />
				<Route path="/lyrics-list" element={<AllLyrics />} />
				<Route path="/edit/:title" element={<Edit />} />
				<Route path="/delete/:id" element={<Delete />} />
			</Routes>
		);
}
export default Page;
/*Para renderizar a home antes era: <Route exact path="/" component={Home} /> agora e
<Route exact path="/" element={<Home/>} />
*/