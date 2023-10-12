import logo from './logo.svg';
import './App.css';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import Header from './MyComponents/Header';

function App() {
  return (
    <>
      <Header title="My Todos List"/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
