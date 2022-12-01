import './App.scss';
import { Route, Routes } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
