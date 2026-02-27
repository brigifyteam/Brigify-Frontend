export const MENTORS = [
    {
        id: 1,
        name: 'Sarah Chen',
        role: 'Senior Product Manager at Google',
        rating: 4.9,
        reviews: 120,
        hourlyRate: 120,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
        skills: ['PRODUCT STRATEGY', 'B2B SAAS'],
        description: 'Helping aspiring product managers break into tech and master the art of data-driven decision making.',
        status: 'online',
        expertise: 'Product Management',
        industry: 'AI/ML',
        experience: 'Senior (8+ years)',
        popularTags: ['Strategy', 'SaaS Scaling'],
        aboutMe: "Hi, I'm Sarah! I am passionate about helping junior PMs break into tech and helping mid-level PMs accelerate their careers. I specialize in product strategy, roadmapping, and agile methodologies.\n\nWith over 10 years of experience in both startups and Fortune 500 companies, I've seen what works and what doesn't. I have mentored over 50 students who have landed roles at top tech companies like Google, Spotify, and Uber. My coaching style is direct, actionable, and tailored to your specific goals.",
        stats: [
            { label: 'Years Experience', value: '10+' },
            { label: 'Mentees Hired', value: '50+' },
            { label: 'Sessions Hosted', value: '850+' }
        ],
        expertiseGroups: [
            { category: 'PRODUCT MANAGEMENT', skills: ['Product Strategy', 'Roadmapping', 'Agile & Scrum', 'Data Analysis', 'User Research'], color: 'blue' },
            { category: 'CAREER GROWTH', skills: ['Resume Review', 'Interview Prep', 'Salary Negotiation', 'Leadership Coaching'], color: 'green' }
        ],
        workExperience: [
            { role: 'Senior Product Manager', company: 'Google', location: 'Mountain View, CA', period: '2020 - Present', description: 'Leading the core platform team. Successfully launched the 2.0 redesign which increased user engagement by 40%. Manage a team of 3 Junior PMs.' },
            { role: 'Product Manager', company: 'StartupInc', location: 'San Francisco, CA', period: '2018 - 2020', description: 'First PM hire. Built the roadmap from scratch and worked directly with founders to define product-market fit.' }
        ],
        menteeReviews: [
            { name: 'James Miller', role: 'Product Owner at FintechCo', content: '"Sarah gave me incredibly actionable advice on my resume. I landed an interview at my dream company within a week of applying her feedback."', rating: 5, avatar: 'JM' },
            { name: 'Elena Lopez', role: 'Aspiring PM', content: '"Sarah is highly knowledgeable about the product landscape."', rating: 5, avatar: 'EL' }
        ],
        location: 'Mountain View, USA',
        localTime: '9:34 AM',
        languages: 'English, Mandarin',
        languageLevel: 'Fluent',
        education: 'Stanford University',
        educationDetail: 'MBA, 2016',
        nextAvailability: [
            { day: 'Tomorrow', time: '10:00 AM', active: true },
            { day: 'Wed, Oct 24', time: '2:00 PM', active: false }
        ]
    },
    {
        id: 2,
        name: 'Marcus Rodriguez',
        role: 'Staff Engineer at Stripe',
        rating: 5.0,
        reviews: 95,
        hourlyRate: 150,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        skills: ['BACKEND ARCHITECTURE', 'FINTECH'],
        description: '12+ years experience in building scalable payment systems. Expert in distributed systems.',
        status: 'online',
        expertise: 'Software Engineering',
        industry: 'Fintech',
        experience: 'Senior (8+ years)',
        popularTags: ['Python', 'Architecture'],
        aboutMe: "I'm Marcus, a Staff Engineer specializing in high-performance financial systems. I've spent the last decade building the backbone of global payment infrastructures.\n\nI love mentoring engineers who want to deep dive into distributed systems, API design, and scaling engineering cultures.",
        stats: [
            { label: 'Years Experience', value: '12+' },
            { label: 'Systems Built', value: '20+' },
            { label: 'Engineers Mentored', value: '100+' }
        ],
        expertiseGroups: [
            { category: 'ENGINEERING', skills: ['Distributed Systems', 'Go', 'Python', 'Kubernetes'], color: 'blue' },
            { category: 'SYSTEM DESIGN', skills: ['Microservices', 'Database Scaling', 'API Design'], color: 'green' }
        ],
        workExperience: [
            { role: 'Staff Engineer', company: 'Stripe', location: 'New York, NY', period: '2019 - Present', description: 'Architecting global ledger systems handling millions of transactions per second.' },
            { role: 'Senior Software Engineer', company: 'PayPal', location: 'San Jose, CA', period: '2015 - 2019', description: 'Focused on fraud detection systems and real-time processing.' }
        ],
        menteeReviews: [
            { name: 'Alex Rivera', role: 'Senior Dev at Uber', content: '"Marcus has a unique way of explaining complex distributed systems concepts. My technical interviews improved drastically."', rating: 5, avatar: 'AR' }
        ],
        location: 'New York, USA',
        localTime: '12:34 PM',
        languages: 'English, Spanish',
        languageLevel: 'Fluent',
        education: 'MIT',
        educationDetail: 'MS in Computer Science',
        nextAvailability: [
            { day: 'Thursday', time: '4:00 PM', active: true },
            { day: 'Friday', time: '11:00 AM', active: false }
        ]
    },
    {
        id: 3,
        name: 'Elena Petrova',
        role: 'Design Lead at Airbnb',
        rating: 4.8,
        reviews: 80,
        hourlyRate: 100,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop',
        skills: ['PRODUCT DESIGN', 'USER RESEARCH'],
        description: 'Focusing on human-centered design principles and building products that users truly love and value.',
        status: 'online',
        expertise: 'UX Design',
        industry: 'E-commerce',
        experience: 'Senior (8+ years)',
        popularTags: ['Strategy'],
        aboutMe: "I am Elena, a designer at heart. I help teams find the 'why' before the 'how'. My background in psychology helps me build intuitive user journeys.\n\nMentoring designers to think beyond the prototype and understand the business impact of their work.",
        stats: [
            { label: 'Years Experience', value: '9+' },
            { label: 'Products Launched', value: '15+' },
            { label: 'Design Awards', value: '3' }
        ],
        expertiseGroups: [
            { category: 'UX DESIGN', skills: ['User Research', 'Information Architecture', 'Usability Testing'], color: 'blue' },
            { category: 'UI DESIGN', skills: ['Design Systems', 'Figma', 'Prototyping'], color: 'green' }
        ],
        workExperience: [
            { role: 'Design Lead', company: 'Airbnb', location: 'London, UK', period: '2021 - Present', description: 'Leading the host experience design team.' },
            { role: 'Senior Designer', company: 'Spotify', location: 'Stockholm, SE', period: '2017 - 2021', description: 'Redesigned the mobile search and discovery experience.' }
        ],
        menteeReviews: [
            { name: 'Sophie Martin', role: 'Junior Designer', content: '"Elena\'s feedback is always constructive and inspiring.She changed the way I look at design systems."', rating: 5, avatar: 'SM' }
        ],
        location: 'London, UK',
        localTime: '5:34 PM',
        languages: 'English, Russian',
        languageLevel: 'Fluent',
        education: 'RCAD',
        educationDetail: 'BFA in Interaction Design',
        nextAvailability: [
            { day: 'Monday', time: '9:00 AM', active: true },
            { day: 'Tuesday', time: '10:00 AM', active: false }
        ]
    },
    {
        id: 4,
        name: 'David Wilson',
        role: 'VP of Growth at Revolut',
        rating: 4.9,
        reviews: 150,
        hourlyRate: 150,
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop',
        skills: ['GROWTH HACKING', 'E-COMMERCE'],
        description: 'Expert in scaling startups from seed to Series C. Master of performance marketing.',
        status: 'online',
        expertise: 'Marketing',
        industry: 'E-commerce',
        experience: 'Senior (8+ years)',
        popularTags: ['Growth'],
        aboutMe: "I've scaled some of the world's fastest-growing fintech apps. I focus on unit economics and sustainable growth loops.",
        stats: [{ label: 'Years Exp', value: '12+' }, { label: 'Growth', value: '400%' }, { label: 'Mentees', value: '45' }],
        expertiseGroups: [{ category: 'MARKETING', skills: ['Growth Hacking', 'SEO', 'Performance Marketing'], color: 'blue' }],
        workExperience: [{ role: 'VP Growth', company: 'Revolut', location: 'London, UK', period: '2019 - Present', description: 'Scaling user base from 1M to 20M.' }],
        location: 'London, UK',
        localTime: '5:15 PM',
        languages: 'English',
        languageLevel: 'Fluent',
        education: 'Oxford University',
        educationDetail: 'MSc in Finance',
        nextAvailability: [{ day: 'Monday', time: '9:00 AM', active: true }]
    },
    { id: 5, name: 'Aisha Khan', role: 'ML Lead at DeepMind', rating: 5.0, reviews: 210, hourlyRate: 200, image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=1972&auto=format&fit=crop', skills: ['DEEP LEARNING', 'AI ETHICS'], description: 'Pioneering researcher in transformer architectures.', status: 'online', expertise: 'Data Science', industry: 'AI/ML', experience: 'Senior (8+ years)', popularTags: ['Python', 'AI Ethics'], aboutMe: "I lead machine learning research at DeepMind, focusing on the ethical implications of large-scale AI systems.", stats: [{ label: 'Papers', value: '50+' }, { label: 'Patents', value: '12' }, { label: 'Years', value: '8' }], expertiseGroups: [{ category: 'AI RESEARCH', skills: ['PyTorch', 'TensorFlow', 'NLP'], color: 'blue' }], workExperience: [{ role: 'ML Lead', company: 'DeepMind', location: 'London, UK', period: '2018 - Present', description: 'Leading research on safety and ethics.' }], location: 'London, UK', localTime: '5:15 PM', languages: 'English, Arabic', education: 'University of Cambridge', educationDetail: 'PhD in Machine Learning', nextAvailability: [{ day: 'Tuesday', time: '10:00 AM', active: true }] },
    { id: 6, name: 'Jordan Smith', role: 'Data Director at Netflix', rating: 4.7, reviews: 65, hourlyRate: 180, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', skills: ['BIG DATA', 'ANALYTICS'], description: 'Data-driven storyteller helping teams leverage behavioral analytics.', status: 'online', expertise: 'Data Science', industry: 'AI/ML', experience: 'Senior (8+ years)', popularTags: ['Python', 'Big Data'], aboutMe: "At Netflix, I help define how we use data to drive subscriber growth and content production.", stats: [{ label: 'Years Exp', value: '15' }, { label: 'Data', value: 'PB+' }], expertiseGroups: [{ category: 'DATA SCIENCE', skills: ['Big Data', 'Spark', 'SQL'], color: 'blue' }], workExperience: [{ role: 'Data Director', company: 'Netflix', location: 'Los Gatos, CA', period: '2017 - Present', description: 'Managing global data teams.' }], location: 'Los Gatos, USA', localTime: '9:15 AM', languages: 'English', education: 'UC Berkeley', educationDetail: 'MS in Data Science', nextAvailability: [{ day: 'Wed', time: '2:00 PM', active: true }] },
    { id: 7, name: 'Sophia Miller', role: 'Product Analyst at Amazon', rating: 4.6, reviews: 45, hourlyRate: 90, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop', skills: ['DATA ANALYTICS', 'SQL'], description: 'Passionate about translating data into actionable insights for the world\'s largest e-commerce platform.', status: 'offline', expertise: 'Product Management', industry: 'E-commerce', experience: 'Mid-level (3-7 years)', popularTags: ['Strategy'], aboutMe: "I help Amazon sellers optimize their pricing and inventory through advanced data models.", stats: [{ label: 'Years Exp', value: '5' }, { label: 'Reports', value: '200+' }], expertiseGroups: [{ category: 'ANALYTICS', skills: ['SQL', 'Tableau', 'Excel'], color: 'blue' }], workExperience: [{ role: 'Product Analyst', company: 'Amazon', location: 'Seattle, WA', period: '2019 - Present', description: 'Analyzing supply chain efficiency.' }], location: 'Seattle, USA', localTime: '9:15 AM', languages: 'English', education: 'University of Washington', educationDetail: 'BA in Economics', nextAvailability: [{ day: 'Fri', time: '1:00 PM', active: true }] },
    { id: 8, name: 'Lucas Wright', role: 'UX Researcher at Figma', rating: 4.9, reviews: 112, hourlyRate: 130, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop', skills: ['USER TESTING', 'PROTOTYPING'], description: 'Deep dive into user behavior for the design industry\'s most popular collaboration tool.', status: 'online', expertise: 'UX Design', industry: 'Design', experience: 'Mid-level (3-7 years)', popularTags: ['Strategy'], aboutMe: "I specialize in qualitative research methods that uncover deep user needs.", stats: [{ label: 'Tests', value: '500+' }, { label: 'Insights', value: '50+' }], expertiseGroups: [{ category: 'UX RESEARCH', skills: ['Usability Testing', 'Contextual Inquiry'], color: 'blue' }], workExperience: [{ role: 'UX Researcher', company: 'Figma', location: 'San Francisco, CA', period: '2020 - Present', description: 'Leading research for the FigJam product.' }], location: 'San Francisco, USA', localTime: '9:15 AM', languages: 'English', education: 'NYU', educationDetail: 'MA in Human-Computer Interaction', nextAvailability: [{ day: 'Mon', time: '11:00 AM', active: true }] },
    { id: 9, name: 'Olivia Gao', role: 'Frontend Engineer at Vercel', rating: 5.0, reviews: 30, hourlyRate: 110, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop', skills: ['REACT', 'NEXT.JS'], description: 'Frontend specialist focused on performance and developer experience.', status: 'online', expertise: 'Software Engineering', industry: 'Edtech', experience: 'Junior (0-2 years)', popularTags: ['Python'], aboutMe: "I build fast, accessible web applications using the latest web technologies.", stats: [{ label: 'Stars', value: '2k+' }, { label: 'PRs', value: '150+' }], expertiseGroups: [{ category: 'FRONTEND', skills: ['React', 'Next.js', 'Tailwind'], color: 'blue' }], workExperience: [{ role: 'Frontend Engineer', company: 'Vercel', location: 'Remote', period: '2022 - Present', description: 'Working on the Next.js core team.' }], location: 'Remote', localTime: '12:00 PM', languages: 'English, Mandarin', education: 'Tsinghua University', educationDetail: 'BS in Computer Science', nextAvailability: [{ day: 'Wed', time: '4:00 PM', active: true }] },
    { id: 10, name: 'James Wilson', role: 'Architect at Microsoft', rating: 4.8, reviews: 140, hourlyRate: 160, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', skills: ['CYBERSECURITY', 'CLOUD'], description: 'Protecting cloud infrastructure at scale.', status: 'online', expertise: 'Software Engineering', industry: 'Fintech', experience: 'Senior (8+ years)', popularTags: ['Architecture'], aboutMe: "I design secure, distributed cloud systems for enterprise clients.", stats: [{ label: 'Cert', value: '15+' }, { label: 'Years', value: '12' }], expertiseGroups: [{ category: 'SECURITY', skills: ['Encryption', 'Identity Management'], color: 'blue' }], workExperience: [{ role: 'Security Architect', company: 'Microsoft', location: 'Redmond, WA', period: '2016 - Present', description: 'Architecting Azure security features.' }], location: 'Redmond, USA', localTime: '9:15 AM', languages: 'English', education: 'Georgia Tech', educationDetail: 'MS in Cybersecurity', nextAvailability: [{ day: 'Thu', time: '9:00 AM', active: true }] },
    { id: 11, name: 'Emma Larson', role: 'Marketing Lead at Shopify', rating: 4.7, reviews: 55, hourlyRate: 120, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop', skills: ['SEO', 'CONTENT'], description: 'Helping e-commerce brands find their voice and reach their customers.', status: 'online', expertise: 'Marketing', industry: 'E-commerce', experience: 'Mid-level (3-7 years)', popularTags: ['SaaS Scaling'], aboutMe: "I build content strategies that drive organic growth for millions of Shopify merchants.", stats: [{ label: 'ROI', value: '10x' }, { label: 'Views', value: '5M+' }], expertiseGroups: [{ category: 'MARKETING', skills: ['SEO', 'Content Strategy'], color: 'blue' }], workExperience: [{ role: 'Marketing Lead', company: 'Shopify', location: 'Ottawa, CA', period: '2020 - Present', description: 'Managing content for the merchant growth team.' }], location: 'Ottawa, Canada', localTime: '12:15 PM', languages: 'English, French', education: 'McGill University', educationDetail: 'BCom in Marketing', nextAvailability: [{ day: 'Tue', time: '3:00 PM', active: true }] },
    { id: 12, name: 'Daniel Kim', role: 'Fullstack at Robinhood', rating: 4.9, reviews: 88, hourlyRate: 140, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop', skills: ['NODE.JS', 'TYPESCRIPT'], description: 'Building the future of democratic finance.', status: 'online', expertise: 'Software Engineering', industry: 'Fintech', experience: 'Mid-level (3-7 years)', popularTags: ['Architecture'], aboutMe: "I'm a fullstack engineer passionate about fintech and building great user experiences.", stats: [{ label: 'Years Exp', value: '7' }, { label: 'Commits', value: '1k+' }], expertiseGroups: [{ category: 'FULLSTACK', skills: ['Node.js', 'React', 'PostgreSQL'], color: 'blue' }], workExperience: [{ role: 'Fullstack Dev', company: 'Robinhood', location: 'Menlo Park, CA', period: '2021 - Present', description: 'Working on core trading features.' }], location: 'Menlo Park, USA', localTime: '9:15 AM', languages: 'English, Korean', education: 'University of Michigan', educationDetail: 'BS in Comp Sci', nextAvailability: [{ day: 'Mon', time: '10:00 AM', active: true }] }
];
