import React from 'react';

const CurriculumHeader = ({ setCurrentPage, setLanguage, language }) => {
  const translations = {
    es: {
      about: 'Sobre Mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
      resume: 'Currículum',
      portfolio: 'Mi Portafolio',
    },
    en: {
      about: 'About Me',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      resume: 'Resume',
      portfolio: 'My Portfolio',
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#" onClick={() => setCurrentPage('About')}>{translations[language].portfolio}</a>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" onClick={() => setCurrentPage('About')} className="text-gray-600 hover:text-black transition-colors">{translations[language].about}</a>
          <a href="#" onClick={() => setCurrentPage('Experience')} className="text-gray-600 hover:text-black transition-colors">{translations[language].experience}</a>
          <a href="#" onClick={() => setCurrentPage('Projects')} className="text-gray-600 hover:text-black transition-colors">{translations[language].projects}</a>
          <a href="#" onClick={() => setCurrentPage('Skills')} className="text-gray-600 hover:text-black transition-colors">{translations[language].skills}</a>
          <a href="#" onClick={() => setCurrentPage('Education')} className="text-gray-600 hover:text-black transition-colors">{translations[language].education}</a>
          <a href="#" onClick={() => setCurrentPage('Contact')} className="text-gray-600 hover:text-black transition-colors">{translations[language].contact}</a>
          <a href="#" onClick={() => setCurrentPage('Resume')} className="text-gray-600 hover:text-black transition-colors">{translations[language].resume}</a>
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="ml-4 px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {language === 'es' ? 'English' : 'Español'}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="mr-4 px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="text-gray-600 hover:text-black focus:outline-none">
            <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-6 h-6'><line x1='3' y1='6' x2='21' y2='6'></line><line x1='3' y1='12' x2='21' y2='12'></line><line x1='3' y1='18' x2='21' y2='18'></line></svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default CurriculumHeader;