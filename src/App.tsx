import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Todo from './pages/todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<Todo />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />s
      </Routes>
    </BrowserRouter>
  );
}

export default App;
