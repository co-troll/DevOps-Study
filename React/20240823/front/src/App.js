import LoginForm from './components/molecules/LoginForm';
import MainForm from './components/molecules/MainForm';
import SignupForm from './components/molecules/SignupForm';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header style={{ width: "100%", height: "15vh"}}></header>
      <body style={{ width: "100%", height: "70vh", display: "flex", justifyContent: "center", "alignItems": "center"}}>
        <Routes>
          <Route path='login' element={<LoginForm />}/>
          <Route path='signup' element={<SignupForm />}/>
          <Route path='main' element={<MainForm />}/>
        </Routes>
      </body>
      <footer style={{ width: "100%", height: "15vh"}}></footer>
    </div>
  );
}

export default App;
