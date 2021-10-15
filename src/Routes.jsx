import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './utils/routeConstants';
// import component Home, About Us,...
import Home from './containers/Home';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/abc' exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;