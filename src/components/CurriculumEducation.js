import React from 'react';

const CurriculumEducation = ({ language }) => {
  const education = {
    es: [
      {
        degree: 'Ingeniería en Tecnologías Computacionales',
        institution: 'Tecnológico de Monterrey',
        period: 'Agosto 2014 - Mayo 2018',
        description: 'Enfocado en desarrollo de software, inteligencia artificial y bases de datos.',
      },
      {
        degree: 'Diplomado en Desarrollo Web Fullstack',
        institution: 'Bootcamp de Código',
        period: 'Enero 2019 - Junio 2019',
        description: 'Aprendizaje intensivo de las últimas tecnologías frontend y backend.',
      },
    ],
    en: [
      {
        degree: 'Computer Technologies Engineering',
        institution: 'Tecnológico de Monterrey',
        period: 'August 2014 - May 2018',
        description: 'Focused on software development, artificial intelligence, and databases.',
      },
      {
        degree: 'Fullstack Web Development Diploma',
        institution: 'Coding Bootcamp',
        period: 'January 2019 - June 2019',
        description: 'Intensive learning of the latest frontend and backend technologies.',
      },
    ],
  };

  return (
    <section id="education" className="py-20 bg-blue-50 min-h-screen flex items-center justify-center pl-64">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">{language === 'es' ? 'Educación' : 'Education'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {education[language].map((edu, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
              <p className="text-lg text-black mb-2">{edu.institution}</p>
              <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumEducation;