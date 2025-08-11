'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface ProjectLink {
  type: 'github' | 'demo' | 'live' | 'figma' | 'behance';
  url: string;
  label: string;
}

interface ProjectTech {
  name: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo' | 'pink' | 'yellow' | 'gray';
}

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  techStack: ProjectTech[];
  role: string;
  imageUrl: string;
  imageAlt: string;
  links: ProjectLink[];
  featured?: boolean;
  category?: 'web' | 'mobile' | 'design' | 'fullstack' | 'frontend' | 'backend';
}

interface ProjectsProps {
  projects: Project[];
}

const techStackColors = {
  blue: 'bg-blue-500/90 text-white backdrop-blur-sm',
  green: 'bg-green-500/90 text-white backdrop-blur-sm',
  purple: 'bg-purple-500/90 text-white backdrop-blur-sm',
  orange: 'bg-orange-500/90 text-white backdrop-blur-sm',
  red: 'bg-red-500/90 text-white backdrop-blur-sm',
  indigo: 'bg-indigo-500/90 text-white backdrop-blur-sm',
  pink: 'bg-pink-500/90 text-white backdrop-blur-sm',
  yellow: 'bg-yellow-500/90 text-white backdrop-blur-sm',
  gray: 'bg-gray-500/90 text-white backdrop-blur-sm',
} as const;

const linkIcons = {
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  demo: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  live: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  figma: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm2-10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  ),
  behance: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.561-5.92 5.466-5.92 3.082 0 4.964 1.982 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.976c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
    </svg>
  ),
} as const;

export default function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="projects" className="py-14 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
                      {/* Section Header */}
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A collection of projects I've worked on, showcasing my skills in full-stack development, 
              UI/UX design, and problem-solving.
            </p>
          </ScrollAnimation>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {projects.map((project, index) => (
              <ScrollAnimation 
                key={project.id}
                animation="fade-up" 
                delay={index * 100}
              >
                <div
                  className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:bg-white/90 dark:hover:bg-slate-900/90 hover:backdrop-blur-md transition-all duration-500 hover:-translate-y-2 border border-white/20 dark:border-slate-700/50 hover:border-white/40 dark:hover:border-slate-600/80 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                                         {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                       {/* Tech Stack Overlay */}
                       <div className="absolute bottom-4 left-4 right-4">
                         <div className="flex flex-wrap gap-2 mb-3 max-h-16 overflow-hidden">
                           {project.techStack.slice(0, 3).map((tech, index) => (
                             <span
                               key={index}
                               className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${techStackColors[tech.color]} transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 whitespace-nowrap`}
                               style={{ transitionDelay: `${index * 100}ms` }}
                             >
                               {tech.name}
                             </span>
                           ))}
                           {project.techStack.length > 3 && (
                             <span 
                               className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-slate-800 backdrop-blur-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 whitespace-nowrap"
                               style={{ transitionDelay: '300ms' }}
                             >
                               +{project.techStack.length - 3} more
                             </span>
                           )}
                         </div>
                         
                         {/* View Details Button */}
                         <button 
                           className="w-full bg-white/90 backdrop-blur-sm text-slate-800 font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white hover:scale-105 whitespace-nowrap cursor-pointer"
                           style={{ transitionDelay: '400ms' }}
                         >
                           View Details
                         </button>
                       </div>
                     </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    {project.category && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100/80 text-slate-700 dark:bg-slate-700/80 dark:text-slate-300 backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Title */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {project.role}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
            </div>

                        {/* View All Projects Button */}
            <ScrollAnimation animation="fade-up" delay={300} className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                <span>View All Projects</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
                     {/* Modal Content */}
           <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-slate-700/50 scrollbar-thin scrollbar-thumb-slate-400 dark:scrollbar-thumb-slate-500 scrollbar-track-transparent">
            {/* Close Button */}
                                   <button
                         onClick={closeModal}
                         className="absolute top-4 right-4 z-10 p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-200 cursor-pointer"
                       >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Project Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-white/90 font-medium">
                  {selectedProject.role}
                </p>
              </div>
            </div>

                         {/* Modal Body */}
             <div className="p-8">
               {/* Description */}
               <div className="mb-8">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                   <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   About This Project
                 </h3>
                 <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
                   <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                     {selectedProject.description}
                   </p>
                 </div>
               </div>

               {/* Tech Stack */}
               {selectedProject.techStack.length > 0 && (
                 <div className="mb-8">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                     <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                     </svg>
                     Technologies Used
                   </h3>
                   <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
                     <div className="flex flex-wrap gap-3">
                       {selectedProject.techStack.map((tech, index) => (
                         <span
                           key={index}
                           className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold ${techStackColors[tech.color]} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                         >
                           {tech.name}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>
               )}

               {/* Project Links */}
               {selectedProject.links.length > 0 && (
                 <div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                     <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                     </svg>
                     Project Links
                   </h3>
                   <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6">
                     <div className="flex flex-wrap gap-4">
                       {selectedProject.links.map((link, index) => (
                                                    <Link
                             key={index}
                             href={link.url}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform cursor-pointer"
                           >
                           {linkIcons[link.type]}
                           <span>{link.label}</span>
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                           </svg>
                         </Link>
                       ))}
                     </div>
                   </div>
                 </div>
               )}
             </div>
          </div>
        </div>
      )}
    </>
  );
} 