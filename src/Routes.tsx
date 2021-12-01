import {Routes, Route} from 'react-router-dom';//As coisas mudaram, agora Routes substitui o Switch
import Home from './pages/Home';
import AddLyric from './pages/AddLyric';
import AllLyrics from './pages/AllLyrics';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import DeleteUser from './pages/DeleteUser';
import NotFound from './pages/NotFound';
import MyAccount from './pages/MyAccount';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUpAdm from './pages/SignUpAdm';
import EditUser from './pages/EditUser';
import PrivateRoute from './components/PrivateRoute';
const Page = () => {
	return (
			<Routes>
				<Route  path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/add_lyric" element={
					<PrivateRoute>
						<AddLyric />
					</PrivateRoute>
				} />
				<Route path="/lyrics-list" element={
					<PrivateRoute>
						<AllLyrics />
					</PrivateRoute>
				} />
				<Route path="/signupadm" element={
					<PrivateRoute>
						<SignUpAdm />
					</PrivateRoute>
				} />
				<Route path="/edit/:title" element={
					<PrivateRoute>
						<Edit />
					</PrivateRoute>
				} />
				<Route path="/edit_user/:id" element={
					<PrivateRoute>
						<EditUser />
					</PrivateRoute>
				} />
				<Route path="/my-account" element={
					<PrivateRoute>
						<MyAccount />
					</PrivateRoute>
				} />
				<Route path="/delete/:id" element={
					<PrivateRoute>
						<Delete />
					</PrivateRoute>
				} />
				<Route path="/delete_user/:id" element={
					<PrivateRoute>
						<DeleteUser />
					</PrivateRoute>
				} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		);
}
export default Page;
/*Para renderizar a home antes era: <Route exact path="/" component={Home} /> agora e
<Route path="/" element={<Home/>} />
*/