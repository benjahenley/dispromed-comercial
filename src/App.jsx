import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { WhatsAppFab } from "./components/WhatsAppFab";

// Lazy load pages for better performance
const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home })),
);
const Products = lazy(() =>
  import("./pages/Products").then((module) => ({ default: module.Products })),
);
const ProductDetail = lazy(() =>
  import("./pages/ProductDetail").then((module) => ({
    default: module.ProductDetail,
  })),
);
const Contacto = lazy(() =>
  import("./pages/Contacto").then((module) => ({ default: module.Contacto })),
);
const Novedades = lazy(() =>
  import("./pages/Novedades").then((module) => ({ default: module.Novedades })),
);

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-brand-300 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-ink/60">Cargando...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/productos/:slug" element={<ProductDetail />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/novedades" element={<Novedades />} />
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4">404</h1>
                      <p className="text-ink/70 mb-6">Página no encontrada</p>
                      <a
                        href="/"
                        className="text-brand-300 hover:text-brand-400 font-medium">
                        Volver al inicio →
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </BrowserRouter>
  );
}

export default App;
