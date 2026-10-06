/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { LightboxProvider } from './components/common/LightboxProvider';
import { HomePage } from './pages/HomePage';
import { VisionPage } from './pages/VisionPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { BenefitsPage } from './pages/BenefitsPage';
import { BeautyPage } from './pages/BeautyPage';
import { VerticalsPage } from './pages/VerticalsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ResearchPage } from './pages/ResearchPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { InvestorsPage } from './pages/InvestorsPage';

function AnimatedRoutes() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="w-full flex-grow flex flex-col"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/vision-mission" element={<VisionPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/who-benefits" element={<BenefitsPage />} />
          <Route path="/beauty-ecosystem" element={<BeautyPage />} />
          <Route path="/verticals" element={<VerticalsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/market-research" element={<ResearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LightboxProvider>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </LightboxProvider>
    </BrowserRouter>
  );
}
