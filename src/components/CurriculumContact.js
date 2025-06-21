import React from 'react';

const CurriculumContact = ({ language }) => {
  const translations = {
    es: {
      title: '¡Échame un grito!',
      emailLabel: 'Correo Electrónico:',
      linkedinLabel: 'LinkedIn:',
    },
    en: {
      title: 'Get in Touch!',
      emailLabel: 'Email:',
      linkedinLabel: 'LinkedIn:',
    },
  };

  return (
    <section id="contact" className="py-20 bg-blue-50 min-h-screen flex items-center justify-center pl-64">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">{translations[language].title}</h2>
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl mx-auto transform transition-all duration-500 hover:scale-105">
          <div className="space-y-4">
            <div className="flex items-center justify-center text-lg text-gray-700">
              <span className="font-semibold mr-2">{translations[language].emailLabel}</span>
              <a href="mailto:ingenierosys84@outlook.es" className="text-black hover:underline">
                ingenierosys84@outlook.es
              </a>
            </div>
            <div className="flex items-center justify-center text-lg text-gray-700">
              <span className="font-semibold mr-2">{translations[language].linkedinLabel}</span>
              <a href="https://www.linkedin.com/in/johonathan-hernandez-machado" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                johonathan-hernandez-machado
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumContact;