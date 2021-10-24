import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import BarraNav from "./components/BarraNav/BarraNav";
import Buscador from "./components/Buscador/Buscador";
import {ProviderHero} from "./components/context/heroContext";
import TeamContainer from "./components/Team/TeamContainer";
import Login from "./components/Login/Login";
import DetallePorHeroContainer from "./components/DetallePorHero/DetallePorHeroContainer";


function App() {

    return (
        <div className={'fondo'}>
            <ProviderHero>
                <Router>
                    <BarraNav/>
                    <Switch>
                        <Route path={'/team'} exact component={Buscador}/>
                        <Route path={'/'} exact component={TeamContainer}/>
                        <Route path={'/login'} exact component={Login}/>
                        <Route path={'/detalles/:id'} exact component={DetallePorHeroContainer}/>
                    </Switch>
                </Router>
            </ProviderHero>
        </div>
    )
}

export default App;
