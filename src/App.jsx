import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Header = lazy(() =>
  import("./components/header_components/Navbar_component")
);
const Home_page = lazy(() => import("./pages/Home_page"));
const SendMessage_page = lazy(() => import("./pages/SendMessage_page"));

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <div className="Header">
              <Header />
            </div>
            <Suspense
              fallback={
                <>
                  <div className="suspense_loading">
                    <h2>Loading...</h2>
                  </div>
                </>
              }
            >
              <Routes>
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="/" element={<Home_page />} />
                <Route path="/SendMessage" element={<SendMessage_page />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
