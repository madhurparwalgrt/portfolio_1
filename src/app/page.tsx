import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CursorLight from "@/components/CursorLight";
import ScrollbarHandler from "@/components/ScrollbarHandler";

export default function Home() {
  const aboutData = {
    name: "Madhur Parwal",
    bio: "I'm a passionate software developer with over 1.5 years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies, with a strong focus on creating scalable, user-friendly solutions. When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring new technologies.",
    resumeUrl: "/assets/resume.pdf",
    skills: [
      { name: "React", category: "frontend" as const },
      { name: "TypeScript", category: "frontend" as const },
      { name: "Next.js", category: "frontend" as const },
      { name: "Tailwind CSS", category: "frontend" as const },
      // { name: "Vue.js", category: "frontend" as const },
      
      { name: "Node.js", category: "backend" as const },
      { name: "Python", category: "backend" as const },
      { name: "Express.js", category: "backend" as const },
      { name: "Django", category: "backend" as const },
      { name: "GraphQL", category: "backend" as const },
      { name: "TensorFlow", category: "backend" as const },
      { name: "PyTorch", category: "backend" as const },
      { name: "LangChain", category: "backend" as const },
      { name: "LangGraph", category: "backend" as const },
      { name: "Hugging Face", category: "backend" as const },

      // Database
      { name: "PostgreSQL", category: "database" as const },
      { name: "MongoDB", category: "database" as const },
      // { name: "Redis", category: "database" as const },
      { name: "MySQL", category: "database" as const },
      
      // Tools & DevOps
      { name: "Docker", category: "tools" as const },
      { name: "AWS", category: "tools" as const },
      { name: "Git", category: "tools" as const },
      { name: "CI/CD", category: "tools" as const },
      // { name: "Kubernetes", category: "tools" as const },
      
      // Other
      { name: "Agile/Scrum", category: "other" as const },
      { name: "UI/UX Design", category: "other" as const },
      { name: "Testing", category: "other" as const },
      { name: "Prompt Engineering", category: "other" as const },
    ]
  };

  // Sample data for the Experience component
  const experienceData = [
    {
      id: "1",
      title: "Software Developer",
      company: "Greenrider Technology",
      period: {
        start: "2024-02-26"
      },
      summary: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
      location: "Gurugram, India",
      type: "full-time" as const,
      techStack: [
        { name: "React", color: "blue" as const },
        { name: "TypeScript", color: "blue" as const },
        { name: "Node.js", color: "green" as const },
        { name: "PostgreSQL", color: "purple" as const },
        { name: "AWS", color: "orange" as const },
        { name: "Docker", color: "indigo" as const }
      ]
    },
    // {
    //   id: "2",
    //   title: "Full-Stack Developer",
    //   company: "StartupXYZ",
    //   period: {
    //     start: "2021-03-01",
    //     end: "2022-12-31"
    //   },
    //   summary: "Built and maintained multiple web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality software solutions and improve user experience.",
    //   location: "Remote",
    //   type: "full-time" as const,
    //   techStack: [
    //     { name: "Vue.js", color: "green" as const },
    //     { name: "Python", color: "blue" as const },
    //     { name: "Django", color: "green" as const },
    //     { name: "MongoDB", color: "purple" as const },
    //     { name: "Redis", color: "red" as const },
    //     { name: "Git", color: "gray" as const }
    //   ]
    // },
    // {
    //   id: "3",
    //   title: "Frontend Developer",
    //   company: "Digital Agency ABC",
    //   period: {
    //     start: "2020-06-01",
    //     end: "2021-02-28"
    //   },
    //   summary: "Developed responsive web applications and e-commerce solutions for various clients. Focused on creating intuitive user interfaces and optimizing frontend performance.",
    //   location: "New York, NY",
    //   type: "full-time" as const,
    //   techStack: [
    //     { name: "React", color: "blue" as const },
    //     { name: "JavaScript", color: "yellow" as const },
    //     { name: "CSS3", color: "pink" as const },
    //     { name: "HTML5", color: "orange" as const },
    //     { name: "Webpack", color: "indigo" as const }
    //   ]
    // },
    // {
    //   id: "4",
    //   title: "Software Engineering Intern",
    //   company: "BigTech Company",
    //   period: {
    //     start: "2019-05-01",
    //     end: "2019-08-31"
    //   },
    //   summary: "Assisted in developing internal tools and automation scripts. Gained hands-on experience with modern development practices and team collaboration.",
    //   location: "Seattle, WA",
    //   type: "internship" as const,
    //   techStack: [
    //     { name: "Python", color: "blue" as const },
    //     { name: "JavaScript", color: "yellow" as const },
    //     { name: "MySQL", color: "purple" as const },
    //     { name: "Git", color: "gray" as const }
    //   ]
    // }
           ];

         // Sample data for the Projects component
         const projectsData = [
           {
             id: "1",
             title: "E-Commerce Platform",
             description: "A full-stack e-commerce platform built with modern technologies, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard.",
             shortDescription: "A comprehensive e-commerce solution with user management, product catalog, and payment processing.",
             techStack: [
               { name: "React", color: "blue" as const },
               { name: "Node.js", color: "green" as const },
               { name: "MongoDB", color: "purple" as const },
               { name: "Stripe", color: "indigo" as const },
               { name: "AWS", color: "orange" as const },
               { name: "Docker", color: "gray" as const }
             ],
             role: "Full-Stack Developer",
             imageUrl: "/assets/project-1.svg",
             imageAlt: "E-Commerce Platform Screenshot",
             links: [
               { type: "github" as const, url: "https://github.com/username/ecommerce", label: "GitHub" },
               { type: "live" as const, url: "https://ecommerce-demo.com", label: "Live Demo" }
             ],
             featured: true,
             category: "fullstack" as const
           },
           {
             id: "2",
             title: "Task Management App",
             description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
             shortDescription: "Real-time collaborative task management with team features and project tracking.",
             techStack: [
               { name: "Vue.js", color: "green" as const },
               { name: "Firebase", color: "orange" as const },
               { name: "Vuex", color: "purple" as const },
               { name: "Vuetify", color: "blue" as const },
               { name: "PWA", color: "indigo" as const }
             ],
             role: "Frontend Developer",
             imageUrl: "/assets/project-2.svg",
             imageAlt: "Task Management App Screenshot",
             links: [
               { type: "github" as const, url: "https://github.com/username/task-app", label: "GitHub" },
               { type: "demo" as const, url: "https://task-app-demo.com", label: "Demo" }
             ],
             featured: true,
             category: "frontend" as const
           },
           {
             id: "3",
             title: "Portfolio Website",
             description: "A modern, responsive portfolio website showcasing professional work, skills, and experience with smooth animations and optimal performance.",
             shortDescription: "Modern responsive portfolio with smooth animations and optimal performance.",
             techStack: [
               { name: "Next.js", color: "blue" as const },
               { name: "TypeScript", color: "blue" as const },
               { name: "Tailwind CSS", color: "green" as const },
               { name: "Framer Motion", color: "purple" as const }
             ],
             role: "Frontend Developer",
             imageUrl: "/assets/project-3.svg",
             imageAlt: "Portfolio Website Screenshot",
             links: [
               { type: "github" as const, url: "https://github.com/username/portfolio", label: "GitHub" },
               { type: "live" as const, url: "https://portfolio-demo.com", label: "Live Site" }
             ],
             featured: false,
             category: "frontend" as const
           }
         ];

         // Sample data for the Contact component
         const contactData = {
           email: "madhurparwal@gmail.com",
           socialLinks: [
             {
               platform: "linkedin" as const,
               url: "https://in.linkedin.com/in/madhurparwal",
               label: "LinkedIn Profile",
               icon: (
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                 </svg>
               )
             },
             {
               platform: "github" as const,
               url: "https://github.com/madhurparwal",
               label: "GitHub Profile",
               icon: (
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                 </svg>
               )
             },
            //  {
            //    platform: "twitter" as const,
            //    url: "https://twitter.com/madhurparwal",
            //    label: "Twitter Profile",
            //    icon: (
            //      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            //        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            //      </svg>
            //    )
            //  }
           ]
         };

         return (
    <>
      <ScrollbarHandler />
      <CursorLight />
      <Navbar />
      <main>
        <section id="home">
          <Hero
            name="Madhur Parwal"
            tagline="Software Developer & Creative Problem Solver"
            welcomeMessage="Hello, I'm"
            profileImageUrl="https://i.ibb.co/FLGnbdph/openart-i-want-to-create-a-character-that-is-holding-laptop-in-his-hand-and-playin-removebg-preview.png"
          />
        </section>
        
        <About {...aboutData} />
        
                       <Experience experiences={experienceData} />
               
               <Projects projects={projectsData} />
        
        <Contact {...contactData} />
      </main>
    </>
  );
}
