import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Alternative for Vercel deployment issues: import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Article from './pages/Article';
import ImageTest from './pages/ImageTest';
import Gallery from './pages/Gallery';
import WhatsAppButton from './components/WhatsAppButton';
import GreetingModal from './components/GreetingModal';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Lazy load heavy components
const ServicePage = lazy(() => import('./pages/ServicePage'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
          <Navbar />
              <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/landing" element={<Landing />} />

                {/* Individual Service Pages */}
                <Route path="/services/:slug" element={
                  <Suspense fallback={<div className="pt-16 min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading service...</p>
                    </div>
                  </div>}>
                    <ServicePage />
                  </Suspense>
                } />

                <Route path="/gallery" element={<Gallery />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<Article />} />
                    <Route path="/image-test" element={<ImageTest />} />

                {/* Catch all route for 404 errors - redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
        <GreetingModal />
        <WhatsAppButton />
        <Footer />
          <SpeedInsights />
          <Analytics />
        </div>
      </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
