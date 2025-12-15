import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiX, FiLock } from 'react-icons/fi';
import GridBackground from './GridBackground';
import { useState } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  const showPrivateMessage = (type) => {
    if (type === 'code') {
      setModalContent({
        title: 'Private Repository',
        message: 'This is proprietary company code and cannot be shared publicly.'
      });
    } else if (type === 'coming-soon') {
      setModalContent({
        title: 'Coming Soon',
        message: 'The live demo is currently under development and will be available soon. Stay tuned!'
      });
    } else {
      setModalContent({
        title: 'Internal Project',
        message: 'Live demo is not available as this is an internal company project.'
      });
    }
    setShowModal(true);
  };

  const projects = [
    {
      title: 'AI Powered - RFP Management System',
      description: 'An intelligent, full-stack RFP Management System that automates the complete RFP lifecycle—from natural language RFP creation and vendor communication to multi-format proposal extraction and AI-based evaluation.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI', 'Gmail API', 'OCR'],
      github: 'https://github.com/ayushrauniyar/RFP-Management-System',
      demo: '#',
      comingSoon: true,
      features: [
        'End-to-End RFP lifecycle : Natural-language RFP creation, Automated Email Send,Vendor onboarding, and Proposal management',
        'Automated Email monitoring and extracting structured data from PDFs, Word, Excel, and images using OCR and AI',
        'AI-driven Proposal evaluation and Scoring based on compliance, pricing, and business criteria',
      ],
    },
    {
      title: 'AML Cloud Migration',
      description: 'Migrated a legacy AML processing system to a cloud-native, event-driven architecture, enabling faster processing, real-time data availability, and improved operational reliability.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'AWS', 'S3', 'PostgreSQL'],
      github: 'https://github.com/ayushrauniyar',
      demo: '#',
      isPrivate: true,
      features: [
        'Migrated a legacy Windows-based processing engine to cloud-native microservices, reducing latency by 90%',
        'Built ingestion and consumer services to stream data via Kafka and process S3 data into PostgreSQL',
        'Observability and Automated deployments, cutting issue triage time by 40% ',
      ],
    },
    {
      title: 'AI Skill Lift Bot',
      description: 'An AI-driven analytics platform that analyzes call transcripts to identify skill gaps, generate performance metrics, and recommend personalized training, enabling faster coaching and improved agent performance.',
      technologies: ['AWS Bedrock', 'S3', 'DynamoDB', 'SageMaker', 'GenAI', 'Python', 'React'],
      github: 'https://github.com/ayushrauniyar',
      demo: '#',
      isPrivate: true,
      features: [
        'Retrieved and analyzed call transcripts to generate structured skill insights, reducing manual review from days to minutes',
        'Multi-agent workflows to compute performance metrics and recommend personalized training, cutting coaching turnaround by 80%',
        'Centralized dashboard for real-time agent insights and unifying performance data',
      ],
    },
    {
      title: 'ML Recommender System',
      description: 'A machine learning–based recommendation system that analyzes user preferences and item features to generate personalized recommendations and improve decision-making accuracy.',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook'],
      github: 'https://github.com/ayushrauniyar/ML-Recommendation-System',
      demo: '#',
      comingSoon: true,
      features: [
        'Built a recommendation engine to suggest relevant items based on user behavior and similarity patterns.',
        'Implemented data preprocessing, feature extraction, and model training for accurate predictions',
        'Evaluated model performance using standard metrics to improve recommendation quality',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] pt-5 scroll-mt-24">
      <GridBackground />
      
      {/* Custom Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative max-w-md w-full bg-gray-900 border border-primary/30 rounded-xl p-6 shadow-2xl shadow-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FiX className="text-xl" />
              </button>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiLock className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{modalContent.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{modalContent.message}</p>
                </div>
              </div>
              
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-4 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-all font-medium"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-6xl mx-auto"
      >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient">Projects</span>
          </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Innovative solutions built with modern technologies
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl border-2 border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-gray-300 text-sm flex items-start group/item hover:text-white transition-colors"
                      >
                        <span className="text-primary mr-2 text-base group-hover/item:scale-125 transition-transform">▹</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="relative px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-medium rounded-md border border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer overflow-hidden group/tech"
                    >
                      <span className="relative z-10">{tech}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/tech:opacity-100 transition-opacity"></div>
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    project.isPrivate ? (
                      <button
                        onClick={() => showPrivateMessage('code')}
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors cursor-pointer"
                      >
                        <FiGithub /> Code
                      </button>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                      >
                        <FiGithub /> Code
                      </a>
                    )
                  )}
                  {project.demo && (
                    project.isPrivate ? (
                      <button
                        onClick={() => showPrivateMessage('demo')}
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors cursor-pointer"
                      >
                        <FiExternalLink /> Live Demo
                      </button>
                    ) : project.comingSoon ? (
                      <button
                        onClick={() => showPrivateMessage('coming-soon')}
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors cursor-pointer"
                      >
                        <FiExternalLink /> Live Demo
                      </button>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
