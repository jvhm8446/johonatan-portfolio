import React from 'react';

const CurriculumExperience = ({ language }) => {
  const experiences = {
    es: [
      {
        title: 'Cybersecurity Expert',
        company: 'DATAMART (Business-to-Business)',
        period: 'Enero 2022 - Presente',
        location: 'Chile',
        logo: 'https://via.placeholder.com/50/0000FF/FFFFFF?text=DM', // Placeholder para logo de Datamart
        countryFlag: '🇨🇱', // Bandera de Chile
        responsibilities: [
          'Investigación y análisis de eventos y logs relacionados con seguridad usando herramientas de seguridad cloud (Guarduty, Inspector, Securityhub, etc).',
          'Ejecución de pruebas de hacking ético, pruebas de penetración y evaluaciones de vulnerabilidades incluidas DAST/SAST.',
          'Desarrollo e implementación de planes de acción contra riesgos cibernéticos identificados.',
          'Presentación de hallazgos detallados y recomendaciones a audiencias técnicas y ejecutivas.',
          'Colaboración con equipos multidisciplinarios para mejorar las estrategias de seguridad.',
          'Soporte técnico en herramientas GRC y controles de seguridad para clientes.',
          'Administración de documentación de políticas y entrenamientos.',
          'Configuración y gestión de Drata (migración, usuarios, políticas).',
          'Revisión de accesos, acciones correctivas y reportes de auditoría.',
          'Atención a consultas de seguridad y optimización de flujos en Slack, Jira.',
        ],
      },
      {
        title: 'IT Security Analyst',
        company: 'Banco Caja Social (Financiera)',
        period: 'Marzo 2019 - Diciembre 2021',
        location: 'Colombia',
        logo: 'https://via.placeholder.com/50/008000/FFFFFF?text=BCS', // Placeholder para logo de Banco Caja Social
        countryFlag: '🇨🇴', // Bandera de Colombia
        responsibilities: [
          'Monitoring and management of security controls in networks, application servers, and databases.',
          'Identification and mitigation of cyber threats with tools such as Nessus, Qualys, Rapid7, and Acunetix, including dast/sast (Devsecops) testing.',
          'Investigation and response to IOC (Indicators of Compromise) and IOA (Indicators of Attack).',
          'Security code analysis using Snyk, DevSkim, and SonarQube.',
          'Recommendation and implementation of protection services and policies to mitigate risks in SaaS services and custom-developed applications, ensuring compliance with PCI-DSS and other standards.',
          'Communication of findings to stakeholders and collaboration with response teams.',
          'Security documentation aligned with ISO 27001 and PCI-DSS.',
          'Support for internal/external audits and third-party risk assessment.',
          'Routine review of access and compliance with internal policies.',
          'Coordination with legal and compliance areas on privacy issues (GDPR, HIPAA).',
        ],
      },
      {
        title: 'Desarrollador Frontend Senior',
        company: 'Tech Solutions S.A. de C.V.',
        period: 'Enero 2020 - Diciembre 2021',
        location: 'México',
        logo: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=TS', // Placeholder para logo de Tech Solutions
        countryFlag: '🇲🇽', // Bandera de México
        responsibilities: [
          'Lideré el desarrollo de interfaces de usuario para aplicaciones web, mejorando la experiencia del usuario y la performance en un 30%.',
          'Implementación de componentes reutilizables con React y TailwindCSS.',
          'Optimización de la carga y rendimiento de las aplicaciones.',
        ],
      },
    ],
    en: [
      {
        title: 'Cybersecurity Expert',
        company: 'DATAMART (Business-to-Business)',
        period: 'January 2022 - Present',
        location: 'Chile',
        logo: 'https://via.placeholder.com/50/0000FF/FFFFFF?text=DM', // Placeholder for Datamart logo
        countryFlag: '🇨🇱', // Chile flag
        responsibilities: [
          'Investigation and analysis of security-related events and logs using cloud security tools (Guarduty, Inspector, Securityhub, etc.).',
          'Execution of ethical hacking tests, penetration tests, and vulnerability assessments including DAST/SAST.',
          'Development and implementation of action plans against identified cyber risks.',
          'Presentation of detailed findings and recommendations to technical and executive audiences.',
          'Collaboration with multidisciplinary teams to improve security strategies.',
          'Technical support for GRC tools and security controls for clients.',
          'Administration of policy documentation and training.',
          'Drata configuration and management (migration, users, policies).',
          'Access review, corrective actions, and audit reports.',
          'Handling security inquiries and optimizing workflows in Slack, Jira.',
        ],
      },
      {
        title: 'IT Security Analyst',
        company: 'Banco Caja Social (Financial)',
        period: 'March 2019 - December 2021',
        location: 'Colombia',
        logo: 'https://via.placeholder.com/50/008000/FFFFFF?text=BCS', // Placeholder for Banco Caja Social logo
        countryFlag: '🇨🇴', // Colombia flag
        responsibilities: [
          'Monitoring and management of security controls in networks, application servers, and databases.',
          'Identification and mitigation of cyber threats with tools such as Nessus, Qualys, Rapid7, and Acunetix, including dast/sast (Devsecops) testing.',
          'Investigation and response to IOC (Indicators of Compromise) and IOA (Indicators of Attack).',
          'Security code analysis using Snyk, DevSkim, and SonarQube.',
          'Recommendation and implementation of protection services and policies to mitigate risks in SaaS services and custom-developed applications, ensuring compliance with PCI-DSS and other standards.',
          'Communication of findings to stakeholders and collaboration with response teams.',
          'Security documentation aligned with ISO 27001 and PCI-DSS.',
          'Support for internal/external audits and third-party risk assessment.',
          'Routine review of access and compliance with internal policies.',
          'Coordination with legal and compliance areas on privacy issues (GDPR, HIPAA).',
        ],
      },
      {
        title: 'Senior Frontend Developer',
        company: 'Tech Solutions S.A. de C.V.',
        period: 'January 2020 - December 2021',
        location: 'Mexico',
        logo: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=TS', // Placeholder for Tech Solutions logo
        countryFlag: '🇲🇽', // Mexico flag
        responsibilities: [
          'Led the development of user interfaces for web applications, improving user experience and performance by 30%.',
          'Implemented reusable components with React and TailwindCSS.',
          'Optimized application loading and performance.',
        ],
      },
    ],
  };

  return (
    <section id="experience" className="py-20 bg-blue-50 min-h-screen flex items-center justify-center pl-64">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">{language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}</h2>
        <div className="grid grid-cols-1 gap-10">
          {experiences[language].map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-12 h-12 rounded-full mr-4 border border-gray-200" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-lg text-black">{exp.company} <span className="ml-2">{exp.countryFlag}</span></p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4">{exp.period} - {exp.location}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumExperience;