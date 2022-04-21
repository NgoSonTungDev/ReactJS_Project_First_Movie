import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './page/home/home';
import Login from './page/login/login';
import SubPage from './page/subpage/subpage';
import PageMovie from './page/pagemovie/pagemovie';

function App() {

  return (   
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />  
        <Route path='/Home' exact component={Home} />  
        <Route path='/movie/:id' exact component={SubPage} />  
        <Route path='/movie/pagemovie/:id' exact component={PageMovie} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;


