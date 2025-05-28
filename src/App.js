import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Settings from "./Components/Settings";
import Mylist from "./Components/Mylist";
import ContextProvider from "./context/Context";
import { SpinnerGap } from "phosphor-react";
const HomeScreen = lazy(() => import("./Components/HomeScreen"));
const Login = lazy(() => import("./Components/Login/Login"));

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Suspense
            fallback={
              <div>
                {" "}
                <SpinnerGap size={155} className="spinner" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/details" element={<Details />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/my-list" element={<Mylist />} />
            </Routes>
          </Suspense>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
