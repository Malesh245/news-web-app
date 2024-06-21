import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/articles/details" element={<ArticleDetailPage />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
