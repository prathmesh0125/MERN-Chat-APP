// import logo from './logo.svg';
import './App.css';
import { Button  } from '@chakra-ui/react'
import { Routes, Route, Link} from "react-router-dom";
import Home from './Component/Home';
import Chat from './Component/Chat';


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

  {/* <Button colorScheme='blue'>Button</Button>  */}
    </div>
  );
}

export default App;
