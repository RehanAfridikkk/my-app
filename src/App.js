import Home from './components/Home/Home';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Api from './components/API/Api';
import Game from './components/Game/Tic-Tac';
function App() {
  return (
    <>
    <div className='App'>
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/api" element={<Api/>}/>
      <Route path="/game" element={<Game/>}/>

    </Routes>
    </div>
    </div>
     
     </>
  );
}

export default App;
