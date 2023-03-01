// react-router-dom
import { Routes, Route } from "react-router-dom";
// import Home from "./components/home/index";
// import Header from "./components/header/index";
// import NewBlog from "./components/newBlog/index";
// import NotFound from "./components/notFound/index";
// import Single from "./components/single/index";

// react
import { lazy, Suspense } from "react";



// styles
import "./App.css";

// pages
const Home = lazy(() => import("./components/home/index"));
const Header = lazy(() => import("./components/header/index"));
const NewBlog = lazy(() => import("./components/newBlog/index"));
const NotFound = lazy(() => import("./components/notFound/index"));
const Single = lazy(() => import("./components/single/index"));

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Header />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
    // </BrowserRouter>
  );
}

export default App;
