import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/navbar/navbar';
import { Home } from './pages/home/home';

function App() {
  return (
    <>
    
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
