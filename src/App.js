import './App.css';
import Navbar from './componenets/Navbar';
import Shop from './componenets/Shop';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Shop></Shop>
      </div>
    </>
  );
}

export default App;
