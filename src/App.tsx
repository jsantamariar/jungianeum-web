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
  LoadingScreen,
} from "./components";
import { ToastProvider } from "./contexts/ToastContext";
import { Suspense, lazy, useState, useEffect } from "react";

// Lazy loading de páginas para mejorar el rendimiento
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Books = lazy(() => import("./pages/Books"));
const Authors = lazy(() => import("./pages/Authors"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Menu = lazy(() => import("./pages/Menu"));
const BookDetail = lazy(() => import("./pages/BookDetail"));

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
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
    </div>
  );
}

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simula la carga inicial y luego oculta el loading screen
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
      setTimeout(() => setShowContent(true), 300); // Pequeño delay para la transición
    }, 1500); // Mínimo 1.5 segundos para mostrar el loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ToastProvider>
        <Navbar />
        <PageInfo />
        {isInitialLoading && <LoadingScreen />}
        {showContent && (
          <Suspense fallback={null}>
            <AppContent />
          </Suspense>
        )}
      </ToastProvider>
    </Router>
  );
}

export default App;
