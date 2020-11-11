import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';
import Projects from './components/Projects';

const navLinks = [
  {
    href: "#",
    link: "Profil",
  },
  {
    href: "#ancre Projects",
    link: "Projects",
  },
  {
    href: "#ancre contacts",
    link: "Contact",
  },
]

function App() {
  return (
  <div>
    <NavBar navLinks={navLinks}/>
    <Content />
    <Projects />
    <Footer />
  </div>
  );
}

export default App;
