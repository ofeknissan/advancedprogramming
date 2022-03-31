import React from "react";
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Signup from './Component/Signup/Signup'

function App() {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/signin" element={<><h1>hello</h1></>}/>
          </Routes>
          </BrowserRouter>

    </>
    );
}

export default App;
