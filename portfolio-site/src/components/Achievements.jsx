import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiStar, FiTarget } from 'react-icons/fi';
import GridBackground from './GridBackground';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: 'Verint R&D Ace Performance Award - Q4 2024',
      organization: 'Verint Systems',
      description: 'Recognized for outstanding performance and significant contributions to R&D projects in Q4 2024',
      icon: FiAward,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Verint R&D Ace Performance Award - Q2 2025',
      organization: 'Verint Systems',
      description: 'Consecutive quarterly recognition for exceptional technical excellence and project delivery',
      icon: FiAward,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Special Recognition from Israel Team',
      organization: 'Verint Systems',
      description: 'Acknowledged by global team for outstanding collaboration and technical contributions',
      icon: FiStar,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Top Percentile in Competitive Programming',
      organization: 'Codeforces',
      description: 'Solved 300+ DSA problems demonstrating strong algorithmic proficiency',
      icon: FiTarget,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="achievements" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] pt-5 scroll-mt-24">
      <GridBackground />
      
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
          <span className="text-gradient">Achievements</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Recognition and milestones achieved throughout my journey
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <achievement.icon className="text-xl text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-primary text-xs font-semibold mb-1.5">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
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

export default Achievements;
