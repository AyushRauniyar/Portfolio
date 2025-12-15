import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import DottedGridBackground from './DottedGridBackground';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Verint Systems',
      location: 'Bangalore, India',
      period: 'June 2024 - Present',
      description: 'Building enterprise-grade cloud-native solutions and AI-powered analytics platforms',
      achievements: [
        'Led migration of a legacy Windows-based engine to cloud-native microservices, improving scalability and reliability and reducing processing latency by 90%. Designed Kafka-based ingestion and S3-to-PostgreSQL pipelines, enabling 3× faster data availability.',
        'Built an AI-driven SkillLift Bot using AWS Bedrock and multi-agent workflows, cutting skill-gap analysis time from hours/days to minutes and reducing coaching turnaround by 80%, while doubling agent performance outcomes.',
        'Migrated enterprise authentication from Azure Identity V1 to Okta Identity V2, reducing API auth failures by 30–40%. Resolved 200+ security vulnerabilities and integrated AppScan into CI/CD, achieving PCI 4.0 compliance and cutting release approval time by 50%.',
        'Developed optimized REST APIs and Kafka integrations for high-speed data transfer to EDH, enabling timely insights and improving dashboard performance for customer-facing value dashboards.'
      ],
      technologies: ['Java', 'Python', 'Spring Boot', 'Spring MVC', 'Microservices', 'Kafka', 'REST', 'AWS', 'PostgreSQL', 'DynamoDB', 'S3', 'Bedrock', 'GenAI', 'React', 'Okta', 'OAuth2', 'JWT', 'BlackDuck', 'Coverity', 'AppScan', 'CI/CD']
    },
    {
      title: 'Software Developer Intern',
      company: 'Credit Suisse',
      location: 'Pune, India',
      period: 'May 2023 - June 2023',
      description: 'Developed financial automation tools and data analysis systems',
      achievements: [
        'Automated IPV verification with Python and SQL, cutting processing time by 50% and removing manual errors',
        'Produced IPV impact and monthly movement at portfolio/cluster level, enabling stakeholder multi-perspective analysis'
      ],
      technologies: ['Python', 'SQL']
    },
    {
      title: 'Software Developer Summer Intern',
      company: 'Microsoft - AI For Earth',
      location: 'NITK Surathkal, India',
      period: 'May 2022 - July 2022',
      description: 'Worked on environmental AI and machine learning projects',
      achievements: [
        'Processed multimodal satellite datasets and built scalable preprocessing pipelines, improving CO2 and urbanization trend predictions with ML/DL models',
        'Benchmarked DT, RFR, ERT, & MLP models, achieving measurable error reductions in environmental pattern forecasting'
      ],
      technologies: ['Python', 'TensorFlow', 'Machine Learning', 'ML/DL Models']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] pt-5 scroll-mt-24">
      <DottedGridBackground />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          My professional journey and key contributions
        </motion.p>

        <div className="relative space-y-8">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent z-0"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative pl-8 z-10"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-8 w-4 h-4 -ml-[7px] bg-primary rounded-full border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform z-20"></div>
              
              <div className="relative overflow-hidden z-10 bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
                {/* Header */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                      <div className="flex items-center gap-1.5 text-primary mb-1">
                      <FiBriefcase />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-gray-400 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-primary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="relative z-10 text-sm md:text-base text-gray-300 mb-3">{exp.description}</p>

                {/* Achievements */}
                {exp.achievements && (
                  <ul className="relative z-10 space-y-1 mb-3 text-sm md:text-base text-gray-300">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div className="relative z-10 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.03 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-2.5 py-0.5 text-xs md:text-sm rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
