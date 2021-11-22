import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from './utils/routeConstants';
// import component Home, About Us,...
import Home from './containers/Home';
import LoginForm from './components/LoginForm';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTES.TRANGCHU} exact component={Home}/>
                <Route path='/abc' exact component={Home}/>
                <Route path='/login' exact component={LoginForm}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;