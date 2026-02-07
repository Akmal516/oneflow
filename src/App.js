import './App.css';
import Header from './Components/Header/Header';  
import Hero from './Pages/Hero/Hero'; 
import Section from './Pages/Section/Section'
import Article from './Pages/Article/Article';
import Main from './Pages/Main/Main'
import DividerSection from './Pages/DividerSection.js/DividerSection';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="container">
    <Header />
      <Hero />
      <Section/>
      
      <Article/>
      <Main/>
      <DividerSection/>
      <Footer/>
    </div>
  );
}

export default App;
