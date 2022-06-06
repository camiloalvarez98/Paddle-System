
import './App.css';
import { AuthProvider } from './Context'
import { BrowserRouter as Router, Routes as Nose} from 'react-router-dom';

import { PrincipalClub, SelectGanadores, CampeonatosClub, LoginClub, NuevoCampeonato } from './Pages'
import { Principal, AgregarClub , Perfil, LoginAdmin} from './PagesAdministrador'
import { PerfilJugador, CampeonatosJugador } from './PagesPlayer';
import { Hola } from './PublicPages'



function App() {
  return (
    <AuthProvider>
      <Router>
          <div class='slider'>
            <div class='load'>
            </div>
            <CampeonatosJugador/>
          </div>
        
      </Router>
    </AuthProvider>
    
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