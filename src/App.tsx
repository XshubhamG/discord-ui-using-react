import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Server from "./pages/Server";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="server" element={<Server />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
