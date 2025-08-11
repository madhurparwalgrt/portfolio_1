import ScrollAnimation from './ScrollAnimation';

interface TechStack {
  name: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo' | 'pink' | 'yellow' | 'gray';
}

interface Experience {
  id: string;
  title: string;
  company: string;
  period: {
    start: string;
    end?: string; // Optional for current role
  };
  summary: string;
  techStack: TechStack[];
  location?: string;
  type?: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
}

interface ExperienceProps {
  experiences: Experience[];
}

const techStackColors = {
  blue: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
  green: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
  purple: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
  orange: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
  red: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
  indigo: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
  pink: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
  yellow: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
  gray: 'bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 backdrop-blur-sm',
} as const;

export default function Experience({ experiences }: ExperienceProps) {
  const formatPeriod = (period: Experience['period']) => {
    const startDate = new Date(period.start);
    const startMonth = startDate.toLocaleDateString('en-US', { month: 'short' });
    const startYear = startDate.getFullYear();
    
    if (!period.end) {
      return `${startMonth} ${startYear} — PRESENT`;
    }
    
    const endDate = new Date(period.end);
    const endMonth = endDate.toLocaleDateString('en-US', { month: 'short' });
    const endYear = endDate.getFullYear();
    
    // If same year, show both months
    if (startYear === endYear) {
      return `${startMonth} — ${endMonth} ${startYear}`;
    }
    
    return `${startMonth} ${startYear} — ${endMonth} ${endYear}`;
  };

  const getDuration = (period: Experience['period']) => {
    const startDate = new Date(period.start);
    const endDate = period.end ? new Date(period.end) : new Date();
    
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);
    
    if (diffYears > 0) {
      const remainingMonths = diffMonths % 12;
      if (remainingMonths > 0) {
        return `${diffYears} year${diffYears > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
      }
      return `${diffYears} year${diffYears > 1 ? 's' : ''}`;
    }
    
    if (diffMonths > 0) {
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    }
    
    return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
  };

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </ScrollAnimation>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300"></div>
            
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <ScrollAnimation 
                  key={experience.id} 
                  animation="fade-up" 
                  delay={index * 150}
                  className="relative flex items-center gap-12"
                >
                  {/* Timeline Node - Date Badge */}
                  <div className="w-40 flex-shrink-0 flex items-center justify-center">
                    <div className="relative group">
                      {/* Date Badge */}
                      <div className="relative z-10">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:from-blue-600 group-hover:to-blue-700 whitespace-nowrap">
                          {formatPeriod(experience.period)}
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-blue-400 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Card */}
                  <div className="flex-1">
                    <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-2xl hover:bg-white/90 dark:hover:bg-slate-900/90 hover:backdrop-blur-md transition-all duration-500 hover:-translate-y-2 border border-white/20 dark:border-slate-700/50 hover:border-white/40 dark:hover:border-slate-600/80">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                              {experience.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                              <span className="font-medium">{experience.company}</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                            {experience.location && (
                              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                {experience.location}
                              </div>
                            )}
                          </div>
                          {experience.type && (
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 mt-2 sm:mt-0">
                              {experience.type.replace('-', ' ')}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm">
                        {experience.summary}
                      </p>

                      {/* Tech Stack */}
                      {experience.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {experience.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium ${techStackColors[tech.color]} transition-all duration-300 hover:scale-110 hover:bg-emerald-100 dark:hover:bg-emerald-900 hover:backdrop-blur-md hover:shadow-lg`}
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 