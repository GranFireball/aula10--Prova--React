
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Random from './page/Random';
import NotFound from './page/NotFound';
import Todo from './page/Todo';
import { useEffect, useState } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const [dados, setDados] = useState();
  function Atualizar(){
    fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((dados) => {
      setDados(dados.results[0])
    })
  }

  useEffect(() => {
    Atualizar();
  }, [])

  return (
    <UserContext.Provider value={dados}>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/random' element={<Random/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
