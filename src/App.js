import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Alert from "./component/layout/Alert";
import User from "./pages/User";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container px-3 pb-12 mx-auto">
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/user/:login" element={<User />} />
                <Route exact path="/notfound" element={<Notfound />} />
                <Route exact path="/*" element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
