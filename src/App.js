import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { Detail } from './components/Detail';
import { NotFound } from './components/NotFound';
import { Dashboard } from './components/Dashboard';
import { Add } from './components/Add';
function App() {
  return (
    <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}>         
            </Route>
            <Route path='/detail/:userId' element={<Detail />}/>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/add' element={<Add />} />
            <Route path='*' element={<NotFound />} />
          </Routes>    
    </div>
  );
}

export default App;
