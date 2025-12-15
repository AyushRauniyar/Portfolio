import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DottedGridBackground from './DottedGridBackground';
import {
  SiReact,
  SiPython,
  SiSpring,
  SiApachekafka,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGithub,
  SiPostman,
  SiIntellijidea,
  SiLinux,
  SiJira,
  SiJupyter,
} from 'react-icons/si';
import { FaJava, FaNetworkWired, FaServer, FaLock, FaShieldAlt, FaKey, FaMicrosoft, FaCode, FaDatabase, FaUserLock } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Backend & Languages',
      skills: [
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
        { name: 'Spring MVC', icon: SiSpring, color: '#6DB33F' },
        { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },
        { name: 'Microservices', icon: FaServer, color: '#339933' },
        { name: 'RESTful APIs', icon: TbApi, color: '#61DAFB' },
        { name: 'Distributed Systems', icon: FaNetworkWired, color: '#68A063' },
      ],
    },
    {
      title: 'Frontend, Databases & Cloud',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'DynamoDB', icon: SiAmazon, color: '#FF9900' },
        { name: 'S3', icon: SiAmazon, color: '#FF9900' },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      ],
    },
    {
      title: 'DevOps & Security',
      skills: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
        { name: 'Harness', icon: FaServer, color: '#00ADE6' },
        { name: 'Okta', icon: FaUserLock, color: '#007DC1' },
        { name: 'OAuth2', icon: FaLock, color: '#EB5424' },
        { name: 'JWT', icon: FaKey, color: '#000000' },
        { name: 'Azure Identity', icon: FaMicrosoft, color: '#0078D4' },
        { name: 'BlackDuck', icon: FaShieldAlt, color: '#000000' },
        { name: 'Coverity', icon: FaShieldAlt, color: '#384152' },
        { name: 'AppScan', icon: FaShieldAlt, color: '#0F62FE' },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Copilot', icon: FaCode, color: '#000000' },
        { name: 'Cursor', icon: FaCode, color: '#000000' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Github', icon: SiGithub, color: '#181717' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'IntelliJ', icon: SiIntellijidea, color: '#000000' },
        { name: 'VS Code', icon: FaCode, color: '#007ACC' },
        { name: 'Linux', icon: SiLinux, color: '#FCC624' },
        { name: 'Datadog', icon: FaDatabase, color: '#632CA6' },
        { name: 'Vault', icon: FaLock, color: '#000000' },
        { name: 'Jira', icon: SiJira, color: '#0052CC' },
        { name: 'Jupyter Notebook', icon: SiJupyter, color: '#F37626' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] pt-5 overflow-hidden scroll-mt-24">
      <DottedGridBackground />
      
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
          <span className="text-gradient">Technical Skills</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-center mb-8 max-w-2xl mx-auto"
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
              
              <h3 className="relative z-10 text-lg font-semibold text-primary mb-3">
                {category.title}
              </h3>
              <div className="relative z-10 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-all cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon
                        className="text-2xl flex-shrink-0"
                        style={{ color: ['#000000', '#181717', '#231F20', '#384152'].includes(skill.color) ? '#ffffff' : skill.color }}
                      />
                    </motion.div>
                    <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
