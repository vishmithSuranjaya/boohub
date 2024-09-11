import logo from './logo.svg';
import Uppernav from './components/Uppernav';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Iconcontainer from './components/Iconcontainer';
import NewArrivals from './components/NewArrivals';
import './App.css';
import './components/Navbar.css'

function App() {
  return (
    <div className="App">
      <Uppernav />
      <Navbar />
      <Banner />
      <Iconcontainer />
      <NewArrivals />
    </div>
  );
}

export default App;
