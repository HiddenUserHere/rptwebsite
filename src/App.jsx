import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import schema from './layouts/schema.jsx';


function App() {
  return (
    <div className="App">
      <Navbar config={ schema }/>
      <Outlet/>
      <Footer/>
      <SocialLinks/>
    </div>
  );
}

export default App;
