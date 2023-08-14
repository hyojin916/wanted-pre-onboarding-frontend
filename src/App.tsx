import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from 'utils/PrivateRoute';
import './App.css';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Todo from './pages/todo';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/* '/' 경로는 따로 지정해주지 않아서 todo로 설정 */}
          <Route path='/' element={<Todo />}>
            <Route path='/todo' element={<Todo />} />
          </Route>
        </Route>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />s
      </Routes>
    </Router>
  );
}

export default App;
