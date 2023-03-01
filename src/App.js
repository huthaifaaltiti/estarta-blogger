// import related files
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/index";
import Header from "./components/header/index";
import NewBlog from "./components/newBlog/index";
import NotFound from "./components/notFound/index";
import Single from "./components/single/index";

// import styles
import "./App.css";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;
