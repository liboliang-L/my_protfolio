import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10 opacity-60"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={`${project.id}-${tech}-${index}`} 
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5 group-hover:border-purple-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group/link"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover/link:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Source</span>
                  </a>
                  <a 
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
