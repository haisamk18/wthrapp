import logo from './logo.svg';
import './App.css';
import  Main  from './Pages/Main';
import Logo from './images/logo.jpg';
import New from './Pages/new';

function App() {
  const mystyle ={
      position: "absolute",
      width: "70px",
      height: "70px",
      left: "65px",
      top: "15px",
      

      



  };
  return (
    <div className="App">
      <div className='mainapp'>
              <div className='sidebar'></div>

           <New/>
       
     </div>

    </div>
  );
}

export default App;
