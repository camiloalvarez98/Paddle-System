
import './App.css';
import { AuthProvider } from './Context'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { PrincipalClub, SelectGanadores, CampeonatosClub, LoginClub, NuevoCampeonato } from './Pages'
import { Principal, AgregarClub , Perfil, LoginAdmin} from './PagesAdministrador'
import { PerfilJugador, CampeonatosJugador, LoginJugador } from './PagesPlayer';
import { Hola } from './PublicPages'



function App() {
  return (
    <div class='slider'>
      <div class='load'>
      </div>
      <BrowserRouter>
        <main>
          <Routes>
              <Route path="/" element={<AgregarClub/>}/>
              <Route path="/LoginAdmin" element={<AgregarClub/>}/>
              <Route path="/LoginClub" element={<CampeonatosClub/>}/>
              <Route path="/LoginJugador" element={<LoginJugador/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
    
  );
}

/*<Route path = '/' exact component={LoginAdmin}/>
          <Route path = '/o' exact component={LoginClub}/>*/

/*FALTA UNA PÁGINA PRINCIPAL QUE PERMITA LA OPCIÓN DE LOS 3 LOGINS*/
export default App;

/*
<Router>
<Switch>
  <Route path = '/' exact component={PrincipalClub}/>
  <Route path = '/CampeonatosClub' component = {CampeonatosClub}/>
  
</Switch>
</Router>*/