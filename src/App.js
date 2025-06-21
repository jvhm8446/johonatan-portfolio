import React, { useState } from 'react';
import CurriculumSidebar from './components/CurriculumSidebar';
import CurriculumAbout from './components/CurriculumAbout';
import CurriculumExperience from './components/CurriculumExperience';
import CurriculumProjects from './components/CurriculumProjects';
import CurriculumSkills from './components/CurriculumSkills';
import CurriculumEducation from './components/CurriculumEducation';
import CurriculumContact from './components/CurriculumContact';
import CurriculumResume from './components/CurriculumResume';

const App = () => {
  const [currentPage, setCurrentPage] = useState('About');
  const [language, setLanguage] = useState('es'); // 'es' para español, 'en' para inglés

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <CurriculumAbout language={language} />;
      case 'Experience':
        return <CurriculumExperience language={language} />;
      case 'Projects':
        return <CurriculumProjects language={language} />;
      case 'Skills':
        return <CurriculumSkills language={language} />;
      case 'Education':
        return <CurriculumEducation language={language} />;
      case 'Contact':
        return <CurriculumContact language={language} />;
      case 'Resume':
        return <CurriculumResume language={language} />;
      default:
        return <CurriculumAbout language={language} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      <CurriculumSidebar setCurrentPage={setCurrentPage} setLanguage={setLanguage} language={language} />
      <main className="ml-64"> {/* Margen izquierdo para el sidebar */}
        {renderPage()}
      </main>
    </div>
  );
};

export default App;

// DONE