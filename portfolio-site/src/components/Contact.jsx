import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi';
import GridBackground from './GridBackground';

const Contact = () => {
    const [sending, setSending] = React.useState(false);
    const [sent, setSent] = React.useState(false);
    const [error, setError] = React.useState(null);
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

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'ayushjnv0@gmail.com',
      link: 'mailto:ayushjnv0@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone & Whatsapp',
      value: '+91 9129489002',
      link: 'https://wa.me/919129489002',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Bangalore, India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ayush-rauniyar',
    },
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/ayushrauniyar',
    },
    {
      icon: FiInstagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/ayush__rauniyar?igsh=MXJrNTJ3a21rMWJsaQ%3D%3D&utm_source=qr',
    },
    {
      icon: FiPhone,
      name: 'WhatsApp',
      url: 'https://wa.me/919129489002',
    },
    {
      icon: FiMail,
      name: 'Email',
      url: 'mailto:ayushjnv0@gmail.com',
    },
  ];

  return (
    <section id="contact" className="relative py-8 px-2 sm:px-4 lg:px-8 bg-gradient-to-b from-gray-950 to-black pt-5 scroll-mt-24 overflow-hidden">
      <GridBackground />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="text-gradient">Get In Touch</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-center mb-8 max-w-2xl mx-auto"
        >
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gradient mb-3">Contact Information</h3>
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ scale: 1.02, boxShadow: '0 0 13px 2.5px #38bdf86b' }}
                whileTap={{ scale: 0.99, boxShadow: '0 0 18px 4px #a21caf6b' }}
                className="flex items-center gap-3 p-3 bg-gray-800/60 backdrop-blur-md rounded-lg border border-primary/10 hover:border-primary/60 transition-all duration-300 group shadow-sm"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white font-semibold text-base">{item.value}</p>
                </div>
              </motion.a>
            ))}
            {/* Social Links */}
            <div className="pt-2">
              <h4 className="text-lg md:text-xl font-bold text-gradient mb-3">Connect With Me</h4>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target={social.name === 'Email' ? undefined : '_blank'}
                    rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                    whileHover={{ scale: 1.12, rotate: index % 2 === 0 ? -10 : 10, boxShadow: '0 0 18px 3px #38bdf880' }}
                    whileTap={{ scale: 0.96, rotate: 0, boxShadow: '0 0 28px 6px #a21caf80' }}
                    className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-lg cursor-pointer"
                    aria-label={social.name}
                  >
                    <social.icon className="text-primary text-xl md:text-2xl" />
                  </motion.a>
                ))}
              </div>
              {/* Download Resume Button */}
              <div className="mt-4">
                <motion.a
                  href="/Resume.pdf"
                  download
                  whileHover={{ scale: 1.04, boxShadow: '0 0 18px 3px #38bdf880' }}
                  whileTap={{ scale: 0.98, boxShadow: '0 0 28px 6px #a21caf80' }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg border-2 border-primary/40 hover:bg-primary/80 hover:text-white transition-all duration-200 text-sm md:text-base shadow-lg cursor-pointer"
                  style={{ letterSpacing: '0.01em' }}
                >
                  Download Resume
                </motion.a>
              </div>
          </div>
        </motion.div>

          {/* Send a Message Heading and Form together */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-gradient">Send a Message</h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 0 13px 2.5px #38bdf86b' }}
              whileTap={{ scale: 0.99, boxShadow: '0 0 18px 4px #a21caf6b' }}
              className="bg-gray-900/70 rounded-lg border border-primary/10 p-4 md:p-6 shadow-md transition-all duration-300"
            >
              <form className="space-y-3" onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                setSent(false);
                setError(null);
                window.emailjs.sendForm(
                  'service_b0rjf8y',
                  'template_6cx0s53',
                  e.target,
                  'ZYGAQG81QxGS1U4MB'
                ).then(
                  (result) => {
                    setSent(true);
                    setSending(false);
                    e.target.reset();
                    setTimeout(() => setSent(false), 15000);
                  },
                  (error) => {
                    setError('Failed to send message. Please try again later.');
                    setSending(false);
                  }
                );
              }}>
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-900 border border-primary/20 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-base transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-900 border border-primary/20 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-base transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-base font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 bg-gray-900 border border-primary/20 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-base transition-all"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-3 py-2 bg-gray-900 border border-primary/20 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-base transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 0 14px 3px #38bdf880' }}
                whileTap={{ scale: 0.96, boxShadow: '0 0 18px 5px #a21caf80' }}
                type="submit"
                className="w-full px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md text-white font-medium text-base hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ letterSpacing: '0.01em' }}
                disabled={sending}
              >
                {sending ? 'Sending...' : sent ? 'Sent!' : 'Send Message'}
              </motion.button>
              {sent && (
                <div className="text-green-400 text-sm mt-2">Message sent successfully!</div>
              )}
              {error && (
                <div className="text-red-400 text-sm mt-2">{error}</div>
              )}
        </form>
            </motion.div>
          </motion.div>
        </div>
        <motion.footer
          className="mt-12 pt-6 border-t border-primary/10 text-center"
        >
          <p className="text-gray-500 text-xs">
            © 2025 Ayush Rauniyar. Built with <span className="text-red-500 mx-0.5"><FiHeart className="inline-block animate-pulse" /></span>
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default Contact;
