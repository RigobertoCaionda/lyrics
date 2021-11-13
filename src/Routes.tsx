import {Routes, Route} from 'react-router-dom';//As coisas mudaram, agora Routes substitui o Switch
import Home from './pages/Home';
const Page = () => {
	return (
			<Routes>
				<Route  path="/" element={<Home />} />
			</Routes>
		);
}
export default Page;
/*Para renderizar a home antes era: <Route exact path="/" component={Home} /> agora e
<Route exact path="/" element={<Home/>} />
*/