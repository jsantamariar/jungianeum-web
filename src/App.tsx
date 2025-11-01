import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Navbar,
  PageTransition,
  PageInfo,
  NewsletterModal,
} from "./components";
import {
  Home,
  About,
  Books,
  Authors,
  Contacts,
  Menu,
  BookDetail,
} from "./pages";

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <NewsletterModal />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <main className="main-content">
                  <About />
                </main>
              </PageTransition>
            }
          />
          <Route
            path="/books"
            element={
              <PageTransition>
                <main className="main-content">
                  <Books />
                </main>
              </PageTransition>
            }
          />
          <Route
            path="/authors"
            element={
              <PageTransition>
                <main className="main-content">
                  <Authors />
                </main>
              </PageTransition>
            }
          />
          <Route
            path="/contacts"
            element={
              <PageTransition>
                <main className="main-content">
                  <Contacts />
                </main>
              </PageTransition>
            }
          />
          <Route
            path="/menu"
            element={
              <PageTransition>
                <Menu />
              </PageTransition>
            }
          />
          <Route
            path="/books/:id"
            element={
              <PageTransition>
                <BookDetail />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <PageInfo />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
