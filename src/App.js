import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/navbar/navbar';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about/aboutUs';
import { ContactUs } from './pages/contact/contact';
function App() {
  return (
    <>
    
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
