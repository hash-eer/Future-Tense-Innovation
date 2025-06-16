import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ElectricalPage from './pages/ElectricalPage';
import LightingPage from './pages/LightingPage';
import InstrumentationPage from './pages/InstrumentationPage';
import CommunicationPage from './pages/CommunicationPage';
import NotFoundPage from './pages/NotFoundPage';
import SubServicePage from './pages/subPages/SubServicePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="electrical" element={<ElectricalPage />} />
            <Route path="lighting" element={<LightingPage />} />
            <Route path="instrumentation" element={<InstrumentationPage />} />
            <Route path="communication" element={<CommunicationPage />} />

            <Route path="/:service/:id" element={<SubServicePage />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;