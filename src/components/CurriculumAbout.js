import React from 'react';

const CurriculumAbout = ({ language }) => {
  const translations = {
    es: {
      greeting: '¡Qué onda! Soy Johonatan Hernandez Machado',
      description: 'Soy un desarrollador apasionado por crear experiencias digitales increíbles. Me encanta transformar ideas complejas en soluciones elegantes y funcionales. Siempre estoy aprendiendo nuevas tecnologías y buscando desafíos que me permitan crecer profesionalmente. ¡Vamos a construir algo chingón juntos!',
    },
    en: {
      greeting: "Hey there! I'm Johonatan Hernandez Machado",
      description: "I'm a passionate developer focused on creating incredible digital experiences. I love transforming complex ideas into elegant and functional solutions. I'm always learning new technologies and seeking challenges that allow me to grow professionally. Let's build something awesome together!",
    },
  };

  return (
    <section id="about" className="py-20 bg-blue-50 min-h-screen flex items-center justify-center pl-64">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto transform transition-all duration-500 hover:scale-105">
          <img
            src="https://via.placeholder.com/150"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-black shadow-md"
          />
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{translations[language].greeting}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {translations[language].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurriculumAbout;