import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./app.css"
import RecipeDetails from "./components/RecipeDetails";
// import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-details/:id" element={<RecipeDetails />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
