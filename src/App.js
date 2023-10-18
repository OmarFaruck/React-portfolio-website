 
import './App.css';
import About from './Componant/About/About'; 
import Experience from './Componant/Experience/Experience';
import Header from './Componant/Header/Header'; 
import Maincontact from './Componant/Maincontact/Maincontact';
import Mypage from './Componant/Mypage/Mypage'; 
import Portfolio from './Componant/Portfolio/Portfolio';
import Service from './Componant/Service/Service';
import Skill from './Componant/Skill/Skill';
import { Route, Routes } from 'react-router-dom'; 
import Registration from './Componant/Mainregisterpage/Registration';
import Footer from './Componant/Footer/Footer';
function App() {
  return (
    <div className="App">
       <Header/>  
       <Mypage/>
       <About/>
       <Skill/>
       <Service/>
       <Experience/>
       <Portfolio/> 
       
       <Routes>
       <Route path="/login" element={<Maincontact/> } />  
       <Route path="/registration" element={<Registration />} />  
       </Routes> 
       <Footer/>
    </div>
  );
}

export default App;
