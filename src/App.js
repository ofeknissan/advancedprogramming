import React from "react";
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Signup from './Component/Signup/Signup'
import SignIn from "./Component/SignIn/SignIn";

function App() {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/signin" element={<SignIn/>}/>
          </Routes>
          </BrowserRouter>

    </>
    );
}

export default App;
