interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

interface AboutProps {
  name: string;
  bio: string;
  skills: Skill[];
  resumeUrl: string;
}

const skillCategories = {
  frontend: 'Frontend',
  backend: 'Backend', 
  database: 'Database',
  tools: 'Tools & DevOps',
  other: 'Other'
} as const;

export default function About({
  name,
  bio,
  skills,
  resumeUrl
}: AboutProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getSkillIcon = (category: string) => {
    const icons = {
      frontend: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      backend: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      database: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      tools: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      other: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    };
    return icons[category as keyof typeof icons] || icons.other;
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Bio Section */}
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {name}
              </h3>
              <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
                {bio}
              </p>
              
              {/* Resume Download */}
              <div className="inline-flex">
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
                Technical Skills
              </h3>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                  <div key={category} className="group">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
                        {getSkillIcon(category)}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {skillCategories[category as keyof typeof skillCategories]}
                      </h4>
                    </div>
                    
                    {/* Skills List */}
                    <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50">
                      <div className="flex flex-wrap gap-3">
                        {categorySkills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Skills Summary */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20 rounded-xl">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {skills.length} skills across {Object.keys(groupedSkills).length} categories
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 