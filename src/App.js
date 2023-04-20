import './App.scss';
import MainContainer from './Containers/MainContainer';
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Footer/>
    </div>
    
  );
}

export default App;
