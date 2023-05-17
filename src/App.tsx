import {Helmet} from 'react-helmet'

import './App.css';
import { useCallback, useState } from 'react';
import { ExperienceContext } from './contexts/useExperience';
import { Routes, Route } from 'react-router-dom';
import { About, BlogBrowse, BlogPage, Clients, Home, RadioMilwaukee } from './pages';

function App() {
  const [showDetails, setShowDetails] = useState<boolean>(true)

  const toggleDetails = useCallback(() => {
    setShowDetails(showDetails => !showDetails)
  }, [])

  return (
    <ExperienceContext.Provider value={{showDetails, toggleDetails}} >
      <Helmet>
        <script src="https://kit.fontawesome.com/947016a734.js" crossOrigin="anonymous"></script>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogBrowse />} />
        <Route path="/blog/:fileName" element={<BlogPage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/radio-milwaukee" element={<RadioMilwaukee />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ExperienceContext.Provider>
  );
}

export default App;
