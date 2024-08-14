import Header from './components/1-header/Header';
import Offer from './components/4-offer/Offer';
import Main from './components/3-main/Main';
import Footer from './components/7-footer/Footer';
import About from './components/5-about/About';
import Contact from './components/6-contact/Contact';

import './App.css';



function App() {
  return (
    <div className="App">
        <Header/>  
        <Main/>
        <Offer />
        <About />
        <Contact />
        <Footer/>
    </div>
  );
}

export default App;
