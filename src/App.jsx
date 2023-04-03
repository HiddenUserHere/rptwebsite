import { React } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/index.jsx';
import Navbar from './components/Navbar/index.jsx';
import { schema } from './components/Navbar/settings.jsx';
import SocialLinks from './components/SocialLinks/index.jsx';

function App() {
  return (
    <div className="App">
      <Navbar config={schema} />
      <Outlet />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
