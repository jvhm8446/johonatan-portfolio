import React from 'react';

const CurriculumResume = ({ language }) => {
  const translations = {
    es: {
      title: 'Mi Currículum Completo',
      description: 'Puedes descargar mi currículum en formato PDF para una revisión más detallada.',
      button: 'Descargar Currículum',
    },
    en: {
      title: 'My Full Resume',
      description: 'You can download my resume in PDF format for a more detailed review.',
      button: 'Download Resume',
    },
  };

  return (
    <section id="resume" className="py-20 bg-blue-50 min-h-screen flex items-center justify-center pl-64">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">{translations[language].title}</h2>
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto transform transition-all duration-500 hover:scale-105">
          <p className="text-lg text-gray-700 mb-6">
            {translations[language].description}
          </p>
          <a
            href="/path/to/your/resume.pdf" // Reemplaza con la ruta real de tu PDF
            download="Tu_Nombre_Resume.pdf"
            className="inline-flex items-center bg-black text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            {translations[language].button}
            <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5 ml-3'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path><polyline points='7 10 12 15 17 10'></polyline><line x1='12' y1='15' x2='12' y2='3'></line></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurriculumResume;