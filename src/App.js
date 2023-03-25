// react
import { lazy, Suspense } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";
// component
import Header from "./components/Header/index"

// styles
import "./App.css";

// pages
const Home = lazy(() => import("../src/pages/Home/index.js"));
const NewBlog = lazy(() => import("../src/pages/NewBlog/index.js"));
const NotFound = lazy(() => import("../src/pages/NotFound/index.js"));
const SingleBlog = lazy(() => import("../src/pages/SingleBlog/index.js"));

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Header />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/single/:id" element={<SingleBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
    // </BrowserRouter>
  );
}

export default App;
