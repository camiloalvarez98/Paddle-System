
import './App.css';
import { AuthProvider } from './Context'
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import { PrivateRoute, PrivateRoute2 } from './Components';
import { PrincipalClub, SelectGanadores, CampeonatosClub, LoginClub, NuevoCampeonato, HomeClub, SignUpClub, ForgotPassword } from './Pages'
import { PrincipalAdmin, AgregarClub , Perfil, LoginAdmin, SignUpAdmin} from './PagesAdministrador'
import { Principal } from './PublicPages'




function App() {
  return (
    <AuthProvider>
      <div class = 'slider'>
        <div class ='load'/>
        <Router>
          <Routes>
            {/*Rutas para Club*/}
            <Route element = {<PrivateRoute/>}>
              <Route exact path = '/homeclub' element = {<PrincipalClub/>}/>
              <Route path = 'selectganadores' element = {<SelectGanadores/>}/>
              <Route path = 'campeonatosclub' element = {<CampeonatosClub/>}/>
              <Route path = 'nuevocampeonato' element = {<NuevoCampeonato/>}/>
              <Route path = 'principalclub' element = {<PrincipalClub/>}/>
            </Route>
            <Route path = 'loginClub' element = {<LoginClub/>}/>
            <Route path = 'signupclub' element = {<SignUpClub/>}/>
            <Route path = 'forgotpassword' element = {<ForgotPassword/>}/>

            {/*Rutas para admin*/}
            <Route element = {<PrivateRoute2/>}>
              <Route path = 'agregarClub' element = {<AgregarClub/>}/>
              <Route path = 'principalAdmin' element = {<PrincipalAdmin/>}/>
              <Route path = 'perfilAdmin' element = {<Perfil/>}/>
            </Route>
            <Route path = 'loginAdmin' element = {<LoginAdmin/>}/>

            {/*Pagina Principal*/}
            <Route path = 'PrincipalPage' element = {<Principal/>} />
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