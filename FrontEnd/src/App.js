
import './App.css';
import { AuthProvider } from './Context'
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import { PrivateRoute } from './Components';
import { PrincipalClub, SelectGanadores, CampeonatosClub, LoginClub, NuevoCampeonato, HomeClub, SignUpClub } from './Pages'
import { Principal, AgregarClub , Perfil, LoginAdmin, SignUpAdmin} from './PagesAdministrador'




function App() {
  return (
    <AuthProvider>
      <div class = 'slider'>
        <div class ='load'/>
        <Router>
          <Routes>
            {/*Rutas para Club*/}
            <Route element = {<PrivateRoute/>}>
              <Route exact path = '/' element = {<PrincipalClub/>}/>
              <Route path = 'homeclub' element = {<HomeClub/>}/>
              <Route path = 'selectganadores' element = {<SelectGanadores/>}/>
              <Route path = 'campeonatosclub' element = {<CampeonatosClub/>}/>
            </Route>
            <Route path = 'loginClub' element = {<LoginClub/>}/>
          </Routes>
        </Router>
      </div>
      
    </AuthProvider>
    
  );
}

export default App;

/*
      <Router>
        <Routes>
          <Route element = {<PrivateRoute/>}>
            <Route exact path = '/' element = {<PrincipalClub/>}/>
            <Route path = 'homeclub' element = {<HomeClub/>}/>
            <Route path = 'selectganadores' element = {<SelectGanadores/>}/>
            <Route path = 'campeonatosclub' element = {<CampeonatosClub/>}/>
          </Route>
          <Route path = 'loginClub' element = {<LoginClub/>}/>
          
        </Routes>
      </Router>
*/