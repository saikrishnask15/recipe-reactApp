import { createContext } from "react";
import "./App.css";
import UseAxios from "./components/useAxios";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import RecipePage from "./pages/RecipePage";
export const RecipeContext = createContext();
function App() {
  const { response, fetchData } = UseAxios();
  const value = {
    response,
    fetchData,
  };
  return (
    <RecipeContext.Provider value={value}>
      <BrowserRouter>
        <NavBar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RecipePage" element={<RecipePage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </RecipeContext.Provider>
  );
}

export default App;
