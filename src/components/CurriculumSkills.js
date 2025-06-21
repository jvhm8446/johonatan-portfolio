import React from 'react';

const CurriculumSkills = ({ language }) => {
  const skills = [
    'React', 'JavaScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'Figma'
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 min-h-screen flex items-center justify-center pl-64">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">{language === 'es' ? 'Habilidades' : 'Skills'}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium shadow-md transform transition-all duration-300 hover:scale-110 hover:bg-gray-800">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSkills;