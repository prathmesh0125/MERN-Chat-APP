// import logo from './logo.svg';
import './App.css';
import { Button  } from '@chakra-ui/react'
import { Routes, Route, Link} from "react-router-dom";
import Home from './Component/Home';
import Chat from './Component/Chat';
// http://127.0.0.1:5000


function App() {
  return (
    <div className="App">

<Routes>
      <Route
          exact
          path="/"
          element={<Home/> }
        />
      <Route
          exact
          path="/chat"
          element={<Chat/> }
        />
</Routes>

    </div>
  );
}

export default App;
