
import './App.css';
import { AuthProvider } from './Context'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { PrincipalClub, SelectGanadores, CampeonatosClub, LoginClub, NuevoCampeonato } from './Pages'
import { Principal, AgregarClub , Perfil, LoginAdmin} from './PagesAdministrador'




function App() {
  return (
    <AuthProvider>
      <Principal/>
    </AuthProvider>
    
  );
}

export default App;

/*
<Router>
<Switch>
  <Route path = '/' exact component={PrincipalClub}/>
  <Route path = '/CampeonatosClub' component = {CampeonatosClub}/>
  
</Switch>
</Router>*/