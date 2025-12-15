import { motion } from 'framer-motion';
import DottedGridBackground from './DottedGridBackground';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiAward, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Technology - BTech and Minor, Information Technology',
      major: '',
      institution: 'National Institute of Technology Karnataka',
      location: 'Surathkal, India',
      period: 'Nov 2020 - May 2024',
      grade: '',
      logo: '🎓',
    },
    {
      degree: 'Online BSc Foundational Degree in Programming and Data Science',
      major: '',
      institution: 'Indian Institute of Technology, Madras',
      location: 'Remote',
      period: 'Jan 2022 - Oct 2023',
      grade: '',
      logo: '📊',
    },
    {
      degree: 'IIT-JEE Preparation',
      major: '',
      institution: 'Dakshana Foundation',
      location: 'Bangalore, India',
      period: 'June 2018 - March 2020',
      grade: '',
      logo: '📚',
    },
    {
      degree: 'PCM',
      major: '',
      institution: 'Jawahar Navodaya Vidyalaya - JNV',
      location: 'Maharajganj, India',
      period: 'Sept 2013 - March 2020',
      grade: '',
      logo: '🏫',
    },
  ];

  const certifications = [
    {
      title: 'Foundational Level Degree in Programming and Data Science',
      issuer: 'IIT Madras',
      date: '2023',
      status: 'Completed',
      link: 'https://drive.google.com/file/d/1Z7V1YhkpvNQFUkrE2YFcdylBVOH3htdF/view?usp=sharing',
    },
    {
      title: 'Docker For the Absolute Beginners - Hands-On',
      issuer: 'Udemy & KodeKloud',
      date: '2024',
      status: 'Completed',
      link: 'https://drive.google.com/file/d/1yrwB1upw5pndnQIZ8yQqtppiHjoTWITZ/view?usp=drivesdk',
    },
    {
      title: 'Kubernetes For the Absolute Beginners - Hands-On',
      issuer: 'Udemy & KodeKloud',
      date: '2024',
      status: 'Completed',
      link: 'https://drive.google.com/file/d/1EjQ_aDBaNJ9bNC9xXl2N6v2DOPlrpEa_/view?usp=drivesdk',
    },
    {
      title: 'Generative AI for Beginners',
      issuer: 'Udemy',
      date: '2025',
      status: 'Completed',
      link: 'https://drive.google.com/file/d/1n4kC0W8fjbtbx2Urwn2SRZXjJnc2UhpH/view?usp=drivesdk',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Sort certifications by date (descending)
  const sortedCertifications = [...certifications].sort((a, b) => {
    // If date is a year string, parse as int; fallback to string compare
    const yearA = parseInt(a.date) || 0;
    const yearB = parseInt(b.date) || 0;
    if (yearA !== yearB) return yearB - yearA;
    // If same year or not a number, fallback to string compare (desc)
    return b.date.localeCompare(a.date);
  });

  return (

    <section id="education" className="relative py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black pt-5 overflow-hidden scroll-mt-24">
      <DottedGridBackground />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-center mb-8 max-w-2xl mx-auto"
        >
          My academic journey and qualifications
        </motion.p>

        <div className="relative space-y-5">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent z-0"></div>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="group relative pl-8 z-10"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-8 w-4 h-4 -ml-[7px] bg-primary rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-3 rounded-md border border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-2">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center text-lg">
                      {edu.logo}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-base font-bold text-white mb-0.5">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-primary font-semibold mb-0.5">
                          {edu.degree}
                        </p>
                        {edu.major && (
                          <p className="text-gray-300 text-xs mb-0.5">{edu.major}</p>
                        )}
                      </div>
                      <div className="text-left md:text-right mt-1 md:mt-0">
                        <p className="text-gray-400 flex items-center gap-1 text-sm mb-0.5">
                          <FiBookOpen className="text-primary w-4 h-4" />
                          {edu.period}
                        </p>
                        {edu.location && (
                          <p className="text-gray-500 text-sm">{edu.location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Certifications</span>
          </h3>
          <p className="text-gray-400 text-center mb-6 max-w-2xl mx-auto text-base">
            My professional certifications and credentials
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sortedCertifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-3 rounded-md border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-primary/10 rounded-md">
                    <FiAward className="text-primary text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold mb-1">{cert.title}</h4>
                    <p className="text-gray-400 mb-1 text-sm">{cert.issuer}</p>
                    <div className="space-y-0.5 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <FiCalendar className="text-primary text-base" />
                        <span className="font-medium">Issued: {cert.date}</span>
                      </div>
                      <a
                        href={cert.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-0.5 px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/30 rounded hover:bg-primary/20 hover:text-white transition-colors duration-200 text-xs font-semibold"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
