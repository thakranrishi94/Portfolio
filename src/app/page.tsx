// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Code, Briefcase, User, FileText, Send, ExternalLink, Github, Linkedin, Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10);

      // Set active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 300) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills data
  const skills = [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "RESTful APIs", level: 90 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "TypeScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Git/GitHub", level: 85 }
  ];

  // Experience data
  const experiences = [
    {
      company: "Digilink Ads",
      position: "PHP Developer",
      period: "Dec 2022 - July 2023",
      description: "As a PHP Developer Intern, I contributed to the development of scalable microservices and RESTful APIs. I worked on optimizing database queries, implementing authentication systems, and ensuring code quality through comprehensive testing.",
      achievements: [
        "Developed and maintained dynamic web applications using PHP and Laravel",
        "Optimized SQL queries, improving database performance by 35%",
        "Integrated third-party APIs (such as payment gateways and SMS services) into applications",
        "Implemented user authentication, authorization, and session management",
        "Collaborated with designers and frontend developers to deliver responsive, user-friendly websites"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS", "REST APIs", "Git", "cPanel"]

    }
  ];

  type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
  };



  // Project data
  const projects: Project[] = [
    {
      title: "Alumni Management System",
      description: "A web application to manage alumni registrations, event organization, faculty assignments, and certificate distribution with role-based portals for alumni, admin, and faculty.",
      image: "/AMS.png",
      technologies: ["Next.js", "TypeScript", "Express.js", "MySQL", "Prisma"],
      github: "https://github.com/thakranrishi94/Alumni-Management-System",
      demo: "https://alumni.soet-krmu.com/"
    },
    {
      title: "Student Management System",
      description: "A Django-powered web application for managing student profiles, courses, and attendance, featuring admin, teacher, and student modules.",
      image: "/SMS.png",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      github: "https://github.com/thakranrishi94/student_management_system",
      demo: "https://student-management-system-1-kick.onrender.com"
    },
    {
      title: "Railway Management System",
      description: "A desktop application built using Java AWT for booking train tickets, managing train schedules, and handling user/admin operations with MySQL database integration.",
      image: "/RMS.png",
      technologies: ["Java", "AWT", "MySQL"],
      github: "https://github.com/thakranrishi94/r-m-s",
      demo: "#"
    }, {
      title: "Summarease",
      description: "A web platform featuring a text summarizer, multi-language translator, and blog content system, designed for enhanced content processing and readability.",
      image: "/SummarEase.png",
      technologies: ["HTML", "CSS", "JavaScript", "Laravel"],
      github: "https://github.com/thakranrishi94/SummarEase",
      demo: "#"
    }
  ]


  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>Rishabh Rajput | Backend Developer</title>
        <meta name="description" content="Backend Developer specializing in Node.js, Express, and Database technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className={`text-2xl font-bold ${isScrolling ? 'text-indigo-600' : 'text-white'}`}>
              <span className="text-indigo-500">&lt;</span>
              Rishabh Rajput
              <span className="text-indigo-500">/&gt;</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <a
                href="#home"
                className={`transition-colors duration-300 ${activeSection === 'home'
                  ? (isScrolling ? 'text-indigo-600' : 'text-indigo-300')
                  : (isScrolling ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300')
                  }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`transition-colors duration-300 ${activeSection === 'about'
                  ? (isScrolling ? 'text-indigo-600' : 'text-indigo-300')
                  : (isScrolling ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300')
                  }`}
              >
                About
              </a>
              <a
                href="#experience"
                className={`transition-colors duration-300 ${activeSection === 'experience'
                  ? (isScrolling ? 'text-indigo-600' : 'text-indigo-300')
                  : (isScrolling ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300')
                  }`}
              >
                Experience
              </a>
              <a
                href="#projects"
                className={`transition-colors duration-300 ${activeSection === 'projects'
                  ? (isScrolling ? 'text-indigo-600' : 'text-indigo-300')
                  : (isScrolling ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300')
                  }`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`transition-colors duration-300 ${activeSection === 'contact'
                  ? (isScrolling ? 'text-indigo-600' : 'text-indigo-300')
                  : (isScrolling ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-300')
                  }`}
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:block">
              <a
                href="/Rishabh_Resume.pdf"
                target="_blank"
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${isScrolling
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white text-indigo-600 hover:bg-gray-100'
                  }`}
              >
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolling
                  ? 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                  : 'text-white hover:text-indigo-300 hover:bg-white/10'
                  }`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className={`block px-3 py-2 rounded-md ${activeSection === 'home' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-800 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className={`block px-3 py-2 rounded-md ${activeSection === 'about' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-800 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#experience"
                className={`block px-3 py-2 rounded-md ${activeSection === 'experience' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-800 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#projects"
                className={`block px-3 py-2 rounded-md ${activeSection === 'projects' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-800 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 rounded-md ${activeSection === 'contact' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-800 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/Rishabh_Resume.pdf"
                target="_blank"
                className="block px-3 py-2 text-center bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-300 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400 rounded-full"></div>
            <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-indigo-200 rounded-full"></div>
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div>
                <p className="text-indigo-300 font-medium mb-2">Hello, I&apos;m</p>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Rishabh Rajput</h1>
                <h2 className="text-2xl md:text-3xl text-indigo-200 mb-6">Backend Developer</h2>
                <p className="text-lg text-indigo-100 mb-8 max-w-xl">
                  I specialize in building robust, scalable backend systems and APIs using
                  Node.js, Express, and modern database technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors duration-300 text-center"
                  >
                    View Projects
                  </a>
                </div>

                <div className="flex space-x-4 mt-12">
                  <a href="https://github.com/thakranrishi94" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300 transition-colors duration-300">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/rishabh-rajput-727417207/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300 transition-colors duration-300">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 blur-2xl transform -translate-x-4 translate-y-4"></div>
                  <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-1 rounded-full">
                    <div className="bg-indigo-900 p-2 rounded-full">
                      <div className="bg-black/30 backdrop-blur-sm w-[350px] h-[350px] rounded-full overflow-hidden flex items-center justify-center">
                        <Image
                          src="/rishabh.jpeg"
                          alt="Rishabh Rajput"
                          width={350}
                          height={350}
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white">
              <ChevronRight size={24} className="transform rotate-90" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center text-indigo-600 mb-2">
                <User size={24} className="mr-2" />
                <h2 className="text-3xl font-bold">About Me</h2>
              </div>
              <div className="h-1 w-20 bg-indigo-600 mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Full-Stack Developer with Backend Expertise
                </h3>

                <div className="space-y-4 text-gray-600">
                  <p>
                    I&apos;m a passionate software developer with a strong foundation in backend technologies and a
                    recent Computer Science graduate with hands-on experience from an 8-month internship.
                  </p>
                  <p>
                    My expertise lies in building RESTful APIs, managing databases, and implementing server
                    architectures using Node.js and Express. I&apos;m also comfortable with frontend technologies,
                    making me a versatile full-stack developer.
                  </p>
                  <p>
                    I&apos;m passionate about writing clean, maintainable code and implementing best practices.
                    I thrive in collaborative environments and enjoy solving complex problems to create
                    efficient and scalable applications.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Info</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex">
                        <span className="font-medium w-24">Name:</span>
                        <span>Rishabh Rajput</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24">Degree:</span>
                        <span>MCA</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24">Location:</span>
                        <span>Bamnoli, Dwarka secotor 28 New Delhi</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24">Email:</span>
                        <span>rishabhrajput2542001@gmail.com</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">My Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Backend Development</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">API Design</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Database Optimization</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Microservices</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">DevOps</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Open Source</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-indigo-600 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">8+</div>
                    <div className="text-gray-600 text-sm">Months Experience</div>
                  </div>
                  <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">10+</div>
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                  <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">5+</div>
                    <div className="text-gray-600 text-sm">APIs Developed</div>
                  </div>
                  <div className="p-4 bg-white shadow-sm rounded-lg border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">90%</div>
                    <div className="text-gray-600 text-sm">Code Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center text-indigo-600 mb-2">
                <Briefcase size={24} className="mr-2" />
                <h2 className="text-3xl font-bold">My Experience</h2>
              </div>
              <div className="h-1 w-20 bg-indigo-600 mt-2"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute left-0 mt-1.5 w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full">
                    <Code size={20} />
                  </div>

                  <div className="ml-20 bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <span className="inline-flex items-center mt-2 md:mt-0 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-indigo-600 font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-600 mb-6">{exp.description}</p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-16">
              <div className="flex items-center text-indigo-600 mb-2">
                <FileText size={24} className="mr-2" />
                <h2 className="text-3xl font-bold">My Projects</h2>
              </div>
              <div className="h-1 w-20 bg-indigo-600 mt-2"></div>
              <p className="mt-6 text-gray-600 max-w-2xl text-center">
                Here are some of the projects I&apos;ve worked on, showcasing my skills in backend development,
                API design, and database management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover rounded-lg"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:from-black/20 group-hover:to-black/80 transition-all duration-300"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-black/30 text-white rounded-full text-xs backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} className="mr-1" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://github.com/thakranrishi94"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                <Github size={20} className="mr-2" />
                See More on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
<section id="contact" className="py-24 bg-indigo-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center text-indigo-600 mb-2">
        <Send size={24} className="mr-2" />
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </div>
      <div className="h-1 w-20 bg-indigo-600 mt-2"></div>
      <p className="mt-6 text-gray-600 max-w-2xl text-center">
        Interested in working together? Feel free to reach out to me for job opportunities or collaborations.
        I&apos;m currently looking for backend developer positions.
      </p>
    </div>

    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Email</h4>
                <p className="mt-1 text-gray-600">rishabhrajput2542001@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Location</h4>
                <p className="mt-1 text-gray-600">Village Bamnoli Dwarka Sector 28, India</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Employment</h4>
                <p className="mt-1 text-gray-600">Available for hire</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                <p className="mt-1 text-gray-600">+91 9267907384</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Connect with me</h4>
          <div className="flex space-x-4">
            <a href="https://github.com/thakranrishi94" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rishabh-rajput-727417207/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <a href="#home" className="text-2xl font-bold">
                <span className="text-indigo-400">&lt;</span>
                Rishabh Rajput
                <span className="text-indigo-400">/&gt;</span>
              </a>
              <p className="mt-4 text-gray-400 max-w-md">
                Full-stack developer with a focus on backend technologies.
                Passionate about creating robust, scalable applications and APIs.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Node.js & Express</li>
                <li className="text-gray-400">MongoDB & PostgreSQL</li>
                <li className="text-gray-400">RESTful APIs</li>
                <li className="text-gray-400">Docker & AWS</li>
                <li className="text-gray-400">React & Next.js</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Rishabh Rajput. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}