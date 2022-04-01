import React from "react";
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Signup from './Component/Signup/Signup'
import SignIn from "./Component/SignIn/SignIn";
import Chat from "./Component/Chat/Chat";

function App() {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/chat" element={<Chat/>}/>
          </Routes>
          </BrowserRouter>

    </>
    );
}

export default App;
