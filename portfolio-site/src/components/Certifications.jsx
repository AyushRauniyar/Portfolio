import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import DottedGridBackground from './DottedGridBackground';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const certifications = [
    {
      title: 'Foundational Level Degree in Programming and Data Science',
      issuer: 'IIT Madras',
      date: '2023',
      credentialId: 'IIT-MADRAS-PDS',
      status: 'Completed',
    },
    {
      title: 'Docker For the Absolute Beginners - Hands-On',
      issuer: 'KodeKloud',
      date: '2023',
      credentialId: 'KODEKLOUD-DOCKER',
      status: 'Completed',
    },
    {
      title: 'Kubernetes For the Absolute Beginners - Hands-On',
      issuer: 'KodeKloud',
      date: '2023',
      credentialId: 'KODEKLOUD-K8S',
      status: 'Completed',
    },
    {
      title: 'Generative AI for Beginners',
      issuer: 'Microsoft',
      date: '2024',
      credentialId: 'MS-GENAI-BEGINNER',
      status: 'Completed',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden pt-5">
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
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Certifications & <span className="text-gradient">Credentials</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FiAward className="text-primary text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 mb-3">{cert.issuer}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-primary" />
                      <span>Issued: {cert.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheckCircle className="text-green-500" />
                      <span className="text-green-500">{cert.status}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-500">
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
