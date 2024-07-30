import { createContext } from "react";
import "./App.css";
import UseAxios from "./components/useAxios";
import Recipe from "./components/recipeSearch/recipe";
import Search from "./components/recipeSearch/search";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import ImproveSkills from "./components/improveSkills";
import QuoteSection from "./components/quoteSection";
import ChefSection from "./components/chefSection";
import Footer from "./components/footer";
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
        <div className="App">
          <NavBar />
          <div className="container main">
            <HeroSection />
            <ImproveSkills />
            <QuoteSection />
            <ChefSection />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </RecipeContext.Provider>
  );
}

export default App;
