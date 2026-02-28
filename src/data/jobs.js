// src/data/jobs.js

export const MOCK_JOBS = {
  'bridgid-1': {
    id: 'bridgid-1',
    title: 'Senior UX Designer',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA',
    remote: true,
    salaryMin: 90,
    salaryMax: 120,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'MID-SENIOR LEVEL',
    postedAgo: '2 days ago',
    experience: '5+ Years',
    about: `We are looking for a creative and experienced Senior UX Designer to join our product team at TechFlow. You will be responsible for defining the user experience for our core fintech products, working closely with PMs, engineers, and researchers to deliver intuitive and impactful solutions.\n\nAs a key member of the design team, you will champion user-centric design principles and help scale our design system. This role offers the opportunity to work on high-visibility projects that touch millions of users globally.`,
    responsibilities: [
      'Lead end-to-end design projects from concept to launch, ensuring high-quality execution.',
      'Conduct user research, usability testing, and data analysis to inform design decisions.',
      'Collaborate with cross-functional teams to define product requirements and roadmaps.',
      'Maintain and evolve the design system to ensure consistency across the platform.'
    ],
    requirements: [
      '5+ years of experience in product design, UI/UX, or interaction design.',
      'Strong portfolio showcasing complex problem-solving and visual design skills.',
      'Proficiency in Figma, prototyping tools, and design system management.',
      'Experience working in an agile environment and collaborating with developers.'
    ],
    skills: ['Figma', 'User Research', 'Wireframing', 'Interaction Design', 'HTML/CSS', 'Motion Design', 'Fintech Experience'],
    applicants: 34,
    companySize: '500-1000 employees',
    companyDescription: 'TechFlow is redefining the future of digital banking. We build accessible, transparent, and user-friendly financial tools for the next generation.',
    companyIndustry: 'Fintech',
    verified: true
  },

  'fe-001': {
    id: 'fe-001',
    title: 'Senior Frontend Engineer',
    company: 'Nexlify',
    location: 'Remote',
    remote: true,
    salaryMin: 140,
    salaryMax: 180,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'SENIOR',
    postedAgo: '5 days ago',
    experience: '6+ Years',
    about: `Join our fast-growing SaaS platform team as a Senior Frontend Engineer. You'll lead the development of responsive, performant user interfaces using modern React ecosystems and help shape our component library.`,
    responsibilities: [
      'Architect and implement complex UI features with React and TypeScript.',
      'Optimize application performance and accessibility.',
      'Mentor junior developers and conduct code reviews.',
      'Collaborate with designers and backend teams on feature delivery.'
    ],
    requirements: [
      '6+ years of professional frontend development experience.',
      'Deep expertise in React, Next.js, TypeScript, and Tailwind CSS.',
      'Strong understanding of web performance and SEO best practices.',
      'Experience with state management (Redux/Zustand) and testing (Jest/RTL).'
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Jest', 'Accessibility (a11y)'],
    applicants: 22,
    companySize: '100-300 employees',
    companyDescription: 'Building next-generation productivity tools for remote-first teams.',
    companyIndustry: 'SaaS',
    verified: true
  },

  'be-001': {
    id: 'be-001',
    title: 'Senior Backend Engineer (Node.js)',
    company: 'CloudPulse',
    location: 'New York, NY',
    remote: false,
    salaryMin: 150,
    salaryMax: 195,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'SENIOR',
    postedAgo: '1 week ago',
    experience: '7+ Years',
    about: `We're seeking a Senior Backend Engineer to build scalable APIs and microservices powering our real-time analytics platform. You'll work on high-throughput systems with Node.js and modern cloud infrastructure.`,
    responsibilities: [
      'Design and implement REST/GraphQL APIs with Node.js and Express/NestJS.',
      'Build reliable data pipelines and event-driven architectures.',
      'Ensure system security, scalability, and observability.',
      'Lead technical discussions and mentor team members.'
    ],
    requirements: [
      '7+ years of backend development experience.',
      'Strong proficiency in Node.js, TypeScript, PostgreSQL/MongoDB.',
      'Experience with Docker, Kubernetes, and AWS/GCP services.',
      'Familiarity with message queues (Kafka/RabbitMQ).'
    ],
    skills: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'AWS', 'Docker', 'Kafka'],
    applicants: 15,
    companySize: '200-500 employees',
    companyDescription: 'Real-time analytics and insights for enterprise customers.',
    companyIndustry: 'Analytics',
    verified: false
  },

  'fs-001': {
    id: 'fs-001',
    title: 'Full-Stack Developer',
    company: 'VitaHealth',
    location: 'Austin, TX',
    remote: true,
    salaryMin: 110,
    salaryMax: 150,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'MID-SENIOR',
    postedAgo: '3 days ago',
    experience: '4+ Years',
    about: `Help us build and scale a telemedicine platform. As a Full-Stack Developer, you'll work across the entire stack to deliver seamless patient and provider experiences.`,
    responsibilities: [
      'Develop responsive frontends with React and backend services with Python/Django.',
      'Integrate third-party APIs (payments, video, EHR systems).',
      'Write clean, testable code and participate in sprint planning.',
      'Improve CI/CD pipelines and deployment processes.'
    ],
    requirements: [
      '4+ years full-stack experience.',
      'Proficiency in React, Python/Django, PostgreSQL.',
      'Experience with AWS or similar cloud platforms.',
      'Understanding of HIPAA compliance a plus.'
    ],
    skills: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS', 'REST APIs', 'HIPAA'],
    applicants: 28,
    companySize: '50-150 employees',
    companyDescription: 'Making healthcare more accessible through technology.',
    companyIndustry: 'Healthtech',
    verified: true
  },

  'devops-001': {
    id: 'devops-001',
    title: 'DevOps Engineer',
    company: 'ScaleForge',
    location: 'Remote',
    remote: true,
    salaryMin: 130,
    salaryMax: 170,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'MID-SENIOR',
    postedAgo: '4 days ago',
    experience: '5+ Years',
    about: `Join our infrastructure team to automate deployments, improve reliability, and scale systems for millions of users. Focus on cloud-native tools and IaC.`,
    responsibilities: [
      'Build and maintain CI/CD pipelines (GitHub Actions/Jenkins).',
      'Manage Kubernetes clusters and infrastructure as code (Terraform).',
      'Monitor system performance and implement observability (Prometheus/Grafana).',
      'Ensure security best practices and compliance.'
    ],
    requirements: [
      '5+ years in DevOps or SRE roles.',
      'Strong experience with AWS/GCP, Kubernetes, Terraform.',
      'Scripting in Python/Bash, familiarity with Docker.',
      'Experience with monitoring and incident response.'
    ],
    skills: ['Kubernetes', 'Terraform', 'AWS', 'Docker', 'CI/CD', 'Prometheus', 'Python'],
    applicants: 19,
    companySize: '150-400 employees',
    companyDescription: 'Cloud infrastructure automation for high-growth startups.',
    companyIndustry: 'Cloud / DevOps',
    verified: false
  },

  'data-001': {
    id: 'data-001',
    title: 'Data Scientist',
    company: 'InsightFlow',
    location: 'Boston, MA',
    remote: true,
    salaryMin: 135,
    salaryMax: 175,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'SENIOR',
    postedAgo: '6 days ago',
    experience: '5+ Years',
    about: `Work on cutting-edge ML models to drive business decisions in e-commerce. You'll own end-to-end data science projects from experimentation to production.`,
    responsibilities: [
      'Build predictive models using Python, scikit-learn, and TensorFlow.',
      'Perform exploratory data analysis and feature engineering.',
      'Deploy models to production and monitor performance.',
      'Collaborate with engineering and product teams.'
    ],
    requirements: [
      '5+ years in data science/ML roles.',
      'Strong Python, SQL, statistics, and ML frameworks.',
      'Experience deploying models (MLflow, SageMaker, etc.).',
      'Advanced degree in CS/Stats a plus.'
    ],
    skills: ['Python', 'SQL', 'TensorFlow', 'scikit-learn', 'Pandas', 'MLflow', 'Statistics'],
    applicants: 12,
    companySize: '300-700 employees',
    companyDescription: 'Data-driven personalization for online retail.',
    companyIndustry: 'E-commerce / AI',
    verified: true
  },

  'ml-001': {
    id: 'ml-001',
    title: 'Machine Learning Engineer',
    company: 'NeuralEdge',
    location: 'Remote',
    remote: true,
    salaryMin: 160,
    salaryMax: 210,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'SENIOR',
    postedAgo: 'Yesterday',
    experience: '6+ Years',
    about: `Help build production-grade ML systems for computer vision and NLP. You'll focus on model optimization, serving, and MLOps best practices.`,
    responsibilities: [
      'Develop and deploy deep learning models (PyTorch/TensorFlow).',
      'Optimize inference latency and cost on cloud GPUs.',
      'Implement MLOps pipelines and experiment tracking.',
      'Work closely with research and engineering teams.'
    ],
    requirements: [
      '6+ years in ML engineering.',
      'Expertise in PyTorch/TensorFlow, Docker, Kubernetes.',
      'Experience with model serving (Triton, KServe, BentoML).',
      'Strong software engineering fundamentals.'
    ],
    skills: ['PyTorch', 'TensorFlow', 'Kubernetes', 'MLOps', 'Docker', 'Computer Vision', 'NLP'],
    applicants: 9,
    companySize: '80-200 employees',
    companyDescription: 'AI solutions for enterprise automation.',
    companyIndustry: 'AI / ML',
    verified: true
  },

  'cloud-001': {
    id: 'cloud-001',
    title: 'Cloud Architect',
    company: 'SkyGrid',
    location: 'Seattle, WA',
    remote: true,
    salaryMin: 170,
    salaryMax: 230,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'LEAD',
    postedAgo: '1 day ago',
    experience: '8+ Years',
    about: `Design and implement secure, scalable cloud architectures for mission-critical applications. Lead migration and modernization initiatives.`,
    responsibilities: [
      'Design multi-cloud and hybrid architectures.',
      'Lead cloud migration and cost optimization projects.',
      'Define security and compliance standards.',
      'Mentor engineers on cloud best practices.'
    ],
    requirements: [
      '8+ years in cloud architecture/engineering.',
      'Deep expertise in AWS (preferred) or Azure/GCP.',
      'Experience with IaC (Terraform/CloudFormation), networking, security.',
      'Certifications (AWS Solutions Architect, etc.) preferred.'
    ],
    skills: ['AWS', 'Terraform', 'Kubernetes', 'Cloud Security', 'Networking', 'Cost Optimization', 'Azure'],
    applicants: 7,
    companySize: '400-900 employees',
    companyDescription: 'Enterprise cloud consulting and managed services.',
    companyIndustry: 'Cloud Services',
    verified: false
  },

  'cyber-001': {
    id: 'cyber-001',
    title: 'Cybersecurity Analyst',
    company: 'SecurePeak',
    location: 'Remote',
    remote: true,
    salaryMin: 120,
    salaryMax: 160,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'MID-SENIOR',
    postedAgo: '8 days ago',
    experience: '4+ Years',
    about: `Protect our clients from evolving threats. Monitor, detect, and respond to security incidents in a SOC environment.`,
    responsibilities: [
      'Monitor security events and perform threat hunting.',
      'Respond to incidents and conduct forensic analysis.',
      'Implement security controls and policies.',
      'Conduct vulnerability assessments and penetration testing.'
    ],
    requirements: [
      '4+ years in cybersecurity operations.',
      'Experience with SIEM (Splunk/Elastic), EDR, firewalls.',
      'Knowledge of NIST, MITRE ATT&CK framework.',
      'Certifications (CompTIA Security+, CISSP) a plus.'
    ],
    skills: ['SIEM', 'Splunk', 'EDR', 'Threat Hunting', 'Incident Response', 'Vulnerability Management', 'NIST'],
    applicants: 25,
    companySize: '120-350 employees',
    companyDescription: 'Managed detection and response for mid-market companies.',
    companyIndustry: 'Cybersecurity',
    verified: true
  },

  'product-001': {
    id: 'product-001',
    title: 'Senior Product Designer',
    company: 'FlowState',
    location: 'Remote',
    remote: true,
    salaryMin: 115,
    salaryMax: 155,
    currency: 'USD',
    type: 'FULL-TIME',
    level: 'SENIOR',
    postedAgo: '3 days ago',
    experience: '6+ Years',
    about: `Shape the future of collaborative tools. As a Senior Product Designer, you'll own end-to-end design for key features in our productivity suite.`,
    responsibilities: [
      'Lead user research, ideation, and prototyping.',
      'Create high-fidelity designs and design systems.',
      'Collaborate with PMs, engineers, and stakeholders.',
      'Conduct usability testing and iterate based on feedback.'
    ],
    requirements: [
      '6+ years in product design.',
      'Expertise in Figma, user research methods, interaction design.',
      'Strong portfolio with shipped products.',
      'Experience in SaaS/product-led growth environments.'
    ],
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Interaction Design', 'Usability Testing', 'SaaS'],
    applicants: 16,
    companySize: '200-500 employees',
    companyDescription: 'Modern collaboration and workflow tools.',
    companyIndustry: 'Productivity SaaS',
    verified: true
  }
};

// Optional helper
export const getJobById = (id) => {
  return MOCK_JOBS[id] || null;
};

export const jobs = Object.values(MOCK_JOBS);