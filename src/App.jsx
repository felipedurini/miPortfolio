import './App.css';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="app-container">
      <Header />
      <AboutMe />
      <SocialLinks />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
