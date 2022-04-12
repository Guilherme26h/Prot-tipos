import './App.css';
import Main from './components/fixed/main/index'
import {Link, Route, BrowserRouter, Routes} from 'react-router-dom'

function App() {
  return (
   <div className="App">
     <div className="Header">
       Este é o Header
     </div>
     <div className="Nav">
        <a href="/2">Teste</a>
     </div>
     <div className="Main">
        <BrowserRouter>
        <Routes>
          <Route path="/2" exact element={<Main/>} />
        </Routes>
      </BrowserRouter>
     </div>
   </div>
  );
}

export default App;
