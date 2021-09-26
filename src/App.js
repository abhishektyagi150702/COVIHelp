import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/navbar/navbar';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about/aboutUs';
import { ContactUs } from './pages/contact/contact';
import { LogIn } from './pages/logIn_and_createAccount/logIn';
import { SignUp } from './pages/logIn_and_createAccount/signUp';
import Footer from './components/common/footer/footer';
function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      <Footer  />
    </Router>
    
    </>
  );
}

export default App;
