import {
  Search,
  BookOpen,
  Award,
  ShoppingBag,
  DollarSign
} from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Skill Assessment",
    company: "Start Here",
    period: "Step 1",
    description: "Identify your current expertise and bridge the skill gap with personalized, data-driven learning recommendations tailored to high-demand roles.",
    icon: Search,
    tags: ["Self-evaluation", "Skill mapping", "Gap analysis"]
  },
  {
    number: 2,
    title: "Interactive Learning",
    company: "Core Phase",
    period: "Step 2",
    description: "Engage with industry-vetted, hands-on modules designed and continuously updated by leading professionals and domain experts.",
    icon: BookOpen,
    tags: ["Hands-on", "Project-based", "Mentored"]
  },
  {
    number: 3,
    title: "Certification",
    company: "Validation",
    period: "Step 3",
    description: "Earn verified, shareable credentials that validate your newly acquired, market-ready capabilities to employers and clients.",
    icon: Award,
    tags: ["Verified", "Shareable", "Industry-recognized"]
  },
  {
    number: 4,
    title: "Marketplace Access",
    company: "Opportunity Stage",
    period: "Step 4",
    description: "Get intelligently matched with high-value freelance, contract, and full-time opportunities based on your verified skill profile.",
    icon: ShoppingBag,
    tags: ["Matching", "Projects", "Clients"]
  },
  {
    number: 5,
    title: "Start Earning",
    company: "Active Phase",
    period: "Step 5",
    description: "Secure real projects, build your portfolio, and accelerate your career with ongoing Bridgify mentorship and support.",
    icon: DollarSign,
    tags: ["Income", "Portfolio", "Growth"]
  }
];

function StepsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Your 5-Step Path to Success
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A clear, structured journey from skill discovery to real earnings
          </p>
        </div>

        {/* Vertical timeline wrapper */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical line spanning the entire timeline height */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          {steps.map((step, index) => {
            // Check if step goes on left (even index 0, 2, 4) or right (odd index 1, 3) for Desktop
            const isEven = index % 2 === 0;
            const Icon = step.icon;

            return (
              <div 
                key={step.number}
                className={`
                  relative flex flex-col md:flex-row items-center justify-between w-full mb-12 md:mb-16 last:mb-0
                  ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}
                `}
              >

                {/* Empty spacer for desktop to push the card to the correct side */}
                <div className="hidden md:block md:w-5/12"></div>

                {/* Central Icon */}
                <div className="absolute left-7 md:left-1/2 top-4 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-indigo-600 shadow-md z-10 flex-shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" />
                </div>

                {/* Content card Container */}
                <div className="w-full pl-20 md:pl-0 md:w-5/12">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative hover:shadow-md transition-shadow duration-300">

                    {/* Desktop Arrow Indicator (Alternates Left/Right) */}
                    <div className={`
                      hidden md:block absolute top-1/2 transform -translate-y-1/2 rotate-45 w-4 h-4 bg-white
                      ${isEven 
                        ? 'right-[-9px] border-t border-r border-gray-200' 
                        : 'left-[-9px] border-b border-l border-gray-200'}
                    `}></div>

                    {/* Mobile Arrow Indicator (Always points left to the icon) */}
                    <div className="md:hidden absolute top-11 left-[-9px] transform -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-b border-l border-gray-200"></div>

                    {/* Card Content Details */}
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
                      <span className="text-xl font-bold text-indigo-700">{step.number}</span>
                      <span className="text-sm font-medium text-gray-500">{step.period}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    
                    <div className="text-sm text-indigo-600 font-medium mb-3">
                      {step.company}
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {step.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default StepsSection;