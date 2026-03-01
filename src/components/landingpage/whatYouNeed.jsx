import React from 'react';
import { BookOpen, Video, Briefcase, ShieldCheck, Users, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { smooth } from '../../animations';


const EverythingYouNeed = () => {
  const features = [
    {
      title: 'Curated Content',
      description:
        'Stop wasting time searching. We curate the best resources from top providers.',
      icon: <BookOpen className="h-10 w-10 text-blue-600" strokeWidth={1.8} />,
    },
    {
      title: 'Live Mentorship',
      description:
        'Book 1:1 sessions with experts who have been where you want to go.',
      icon: <Video className="h-10 w-10 text-blue-600" strokeWidth={1.8} />,
    },
    {
      title: 'Job Matching',
      description:
        'Our algorithm matches your new skills directly with open roles.',
      icon: <Briefcase className="h-10 w-10 text-blue-600" strokeWidth={1.8} />,
    },
    {
      title: 'Skill Certification',
      description:
        'Earn badges and certificates that employers actually recognize.',
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" strokeWidth={1.8} />,
    },
    {
      title: 'Community Hub',
      description:
        'Join study groups and project teams to build your network.',
      icon: <Users className="h-10 w-10 text-blue-600" strokeWidth={1.8} />,
    },
    {
      title: 'Freelance Tools',
      description:
        'Invoicing, contracts, and project management built right in.',
      icon: <FileText className="h-10 w-10 text-blue-600" strokeWidth={1.8} />,
    },
  ];

  return (
    <motion.section className="py-20 md:py-28 bg-gray-50" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={smooth}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Everything you need to grow
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            We've bundled the best tools for career development into one seamless platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smooth, delay: idx * 0.04 }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                {/* Icon container */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50/70 group-hover:bg-blue-100 transition-colors">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EverythingYouNeed;