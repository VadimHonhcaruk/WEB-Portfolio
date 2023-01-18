import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;