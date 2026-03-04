import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: t('about.skills.frontend'),
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3", "Redux"]
    },
    {
      category: t('about.skills.backend'),
      items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      category: t('about.skills.tools'),
      items: ["Git", "Docker", "AWS", "Figma", "Jest/Vitest", "CI/CD"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-500 dark:to-blue-500 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-500 dark:to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Introduction Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('about.role')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('about.description2')}
              </p>
              
              {/* Stats / Quick Facts */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-500">5+</div>
                  <div className="text-sm text-gray-500">{t('about.years_exp')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-500">50+</div>
                  <div className="text-sm text-gray-500">{t('about.projects_count')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-500">20+</div>
                  <div className="text-sm text-gray-500">{t('about.clients_count')}</div>
                </div>
              </div>
            </div>

            {/* Skills Column */}
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-blue-500 dark:from-purple-500 dark:to-blue-500 rounded-full mr-3"></span>
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-purple-500/50 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
