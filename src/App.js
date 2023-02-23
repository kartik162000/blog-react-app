import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import Error from "./pages/Error";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/error/:errorCode" element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
