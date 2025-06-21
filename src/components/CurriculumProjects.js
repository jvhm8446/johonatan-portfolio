import React from 'react';

const CurriculumProjects = ({ language }) => {
  const projects = {
    es: [
      {
        name: 'Plataforma de E-commerce',
        description: 'Desarrollo de una tienda en línea completa con carrito de compras, pasarela de pagos y gestión de productos.',
        link: '#',
      },
      {
        name: 'Aplicación de Gestión de Tareas',
        description: 'Herramienta interactiva para organizar y priorizar tareas diarias, con notificaciones y seguimiento de progreso.',
        link: '#',
      },
      {
        name: 'Blog Personal Responsivo',
        description: 'Diseño y desarrollo de un blog moderno y adaptable a cualquier dispositivo, con sistema de comentarios.',
        link: '#',
      },
    ],
    en: [
      {
        name: 'E-commerce Platform',
        description: 'Development of a complete online store with shopping cart, payment gateway, and product management.',
        link: '#',
      },
      {
        name: 'Task Management Application',
        description: 'Interactive tool to organize and prioritize daily tasks, with notifications and progress tracking.',
        link: '#',
      },
      {
        name: 'Responsive Personal Blog',
        description: 'Design and development of a modern blog adaptable to any device, with a comment system.',
        link: '#',
      },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-blue-50 min-h-screen flex items-center justify-center pl-64">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">{language === 'es' ? 'Mis Proyectos' : 'My Projects'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects[language].map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-black hover:underline font-semibold">
                {language === 'es' ? 'Ver Proyecto' : 'View Project'}
                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-4 h-4 ml-2'><line x1='5' y1='12' x2='19' y2='12'></line><polyline points='12,5 19,12 12,19'></polyline></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumProjects;