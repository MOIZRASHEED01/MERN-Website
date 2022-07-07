import Header from "./component/Header";
import Home from "./component/home/Home";
import { Box } from "@mui/material";
import { DetailView } from "./component/detail/DetailView";
import { CreateView } from "./component/create/CreateView";
import UpdateView from "./component/detail/UpdateView";
import About from "./component/about/About";
// import Login from "./component/Login";
import { Login } from "./component/Login";
import SignUp from "./component/SignUp";
//import { useAuth0 } from "";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Box style={{ marginTop: 64 }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<DetailView />} />
          <Route exact path="/create" element={<CreateView />} />
          <Route exact path="/update" element={<UpdateView />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="*" element={<Pagrnotfound />} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
