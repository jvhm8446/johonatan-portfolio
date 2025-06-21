import React from 'react';

const CurriculumSidebar = ({ setCurrentPage, setLanguage, language }) => {
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
    <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col justify-between z-50">
      <div>
        <div className="text-3xl font-bold text-gray-800 mb-8">
          <a href="#" onClick={() => setCurrentPage('About')}>{translations[language].portfolio}</a>
        </div>
        <nav className="space-y-4">
          <a href="#" onClick={() => setCurrentPage('About')} className="block text-gray-600 hover:text-black transition-colors text-lg">
            {translations[language].about}
          </a>
          <a href="#" onClick={() => setCurrentPage('Experience')} className="block text-gray-600 hover:text-black transition-colors text-lg">
            {translations[language].experience}
          </a>
          <a href="#" onClick={() => setCurrentPage('Projects')} className="block text-gray-600 hover:text-black transition-colors text-lg">
            {translations[language].projects}
          </a>
          <a href="#" onClick={() => setCurrentPage('Skills')} className="block text-gray-600 hover:text-black transition-colors text-lg">
            {translations[language].skills}
          </a>
          <a href="#" onClick={() => setCurrentPage('Education')} className="block text-gray-600 hover:text-black transition-colors text-lg">
            {translations[language].education}
          </a>
          <a href="#" onClick={() => setCurrentPage('Contact')} className="block text-gray-600 hover:text-black transition-colors text-lg">
            {translations[language].contact}
          </a>
          <a href="#" onClick={() => setCurrentPage('Resume')} className="block text-gray-600 hover:text-black transition-colors text-lg">
            {translations[language].resume}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <button
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-base text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {language === 'es' ? 'English' : 'Español'}
        </button>
      </div>
    </aside>
  );
};

export default CurriculumSidebar;