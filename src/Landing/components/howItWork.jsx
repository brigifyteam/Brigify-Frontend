import React from 'react';
import { GraduationCap, UserRound, BriefcaseBusiness } from 'lucide-react';
import { motion } from 'framer-motion';
import { smooth } from '../animations';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Master In-Demand Skills',
      description:
        'Access expertly curated courses aligned with current industry needs — from software engineering to product design and beyond.',
      icon: <GraduationCap className="h-10 w-10 text-[#1132d4]" />,
    },
    {
      id: 2,
      title: 'Learn from Industry Experts',
      description:
        'Get personalized 1:1 mentorship, detailed code reviews, portfolio guidance, and real-world career advice from seasoned professionals.',
      icon: <UserRound className="h-10 w-10 text-[#1132d4]" />,
    },
    {
      id: 3,
      title: 'Land Your Next Opportunity',
      description:
        'Showcase your new skills with a strong portfolio, receive mentor endorsements, and apply directly to verified roles and freelance projects.',
      icon: <BriefcaseBusiness className="h-10 w-10 text-[#1132d4]" />,
    },
  ];

  return (
    <motion.section className="py-20 md:py-24 bg-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={smooth}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#1132d4]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-[#1132d4]">
            How It Works
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Learning to Earning — in Three Clear Steps
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’ve removed the guesswork. No more bouncing between disconnected platforms.
            <br className="hidden sm:inline" /> Just focused learning, expert guidance, and real job opportunities.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="group relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smooth, delay: step.id * 0.05 }}
            >
              {/* Number badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#1132d4] text-lg font-bold text-white shadow-lg">
                {step.id}
              </div>

              {/* Icon circle */}
              <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 transition-colors group-hover:bg-[#1132d4]/10">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;