export type Project = {
  title: string;
  description: string;
  descriptionPoints?: string[];
  techStack: string[];
  impact: string;
  github?: string;
  liveLink?: string;
  category: 'Web' | 'AI' | 'Automation';
  featured?: boolean;
};

export const projects: Project[] = [
  // Featured AI
  {
    title: 'Medical Chatbot - AGADA',
    description: 'An AI-powered chatbot designed to streamline medical information access.',
    descriptionPoints: [
      'Developed AI-powered chatbot to automate medical information retrieval and synthesis workflows.',
      'Implemented hybrid retrieval system combining structured datasets with real-time web sources.',
    ],
    techStack: ['Django', 'Groq API', 'Llama 3', 'DuckDuckGo', 'Supabase', 'Whitenoise'],
    impact: 'Automated complex information workflows, improving efficiency for medical professionals.',
    github: 'https://github.com/Vigneshwaren333/Agada',
    category: 'AI',
    featured: true,
  },
  // Featured Web
  {
    title: 'Hiveworkhub - Blockchain Freelance Platform',
    description: 'A hackathon project demonstrating a decentralized freelance and content platform.',
    descriptionPoints: [
      'Developed a decentralized blogging platform on Hive blockchain for on-chain content.',
      'Designed the UI for a conceptual freelance marketplace, showcasing DApp and UI/UX skills.',
    ],
    techStack: ['Hive Blockchain', 'React', 'DApp', 'UI/UX'],
    impact: 'Demonstrated proficiency in blockchain technology and dApp development in a competitive hackathon setting.',
    github: 'https://github.com/Vigneshwaren333/Hiveworkhub',
    category: 'Web',
    featured: true,
  },
  // Other Web Project
   {
    title: 'Nexusarena - Esports Tournament Platform',
    description: 'A full-stack platform for creating and managing esports tournaments.',
    descriptionPoints: [
      'Developed a feature-rich esports tournament platform for various gaming titles.',
      'Built with React.js for a responsive frontend and Node.js with MongoDB for a robust backend.',
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB'],
    impact: 'Created a comprehensive platform for the esports community, handling complex tournament logic and user interactions.',
    github: 'https://github.com/Vigneshwaren333/Nexusarena',
    category: 'Web',
  },
  // Automation Projects
  {
    title: 'AI-Powered Transcription Workflow',
    description: 'Developed an audio-to-text transcription workflow with N8n for automated meeting notes and documentation.',
    techStack: ['N8n', 'Webhooks', 'AI', 'Speech-to-Text API'],
    impact: 'Saved hours of manual transcription time and created searchable archives of meetings.',
    category: 'Automation',
  },
  {
    title: 'Gmail-to-Slack AI Summary Automation',
    description: 'Automated Gmail-to-Slack workflow using Zapier: incoming emails are summarized using AI and posted to Slack channels for team visibility.',
    techStack: ['Zapier', 'Gmail API', 'Slack API', 'AI'],
    impact: 'Improved team communication and response times by surfacing important emails directly in Slack.',
    category: 'Automation',
  },
  {
    title: 'Intelligent Support Ticket Triage System',
    description: 'Designed an intelligent customer support triage system with Zapier: form submissions are categorized as urgent or general, with urgent issues automatically forwarded to Slack and general inquiries receiving automated email responses.',
    techStack: ['Zapier', 'Webhooks', 'AI', 'Email'],
    impact: 'Drastically reduced response time for urgent support issues and streamlined the customer support process.',
    category: 'Automation',
  },
  {
    title: 'RAG-Based Internal Knowledge Assistant (N8n)',
    description: 'Built a Retrieval-Augmented Generation (RAG) workflow using N8n to enable intelligent querying of company policies and internal documentation. The system improves information accessibility, provides context-aware responses, and enhances decision-making efficiency.',
    techStack: ['N8n', 'RAG', 'AI', 'NLP'],
    impact: 'Improved information accessibility and provided context-aware responses from internal documentation.',
    category: 'Automation',
  },
  {
    title: 'Customer Sentiment Analysis System',
    description: 'Developed a sentiment analysis pipeline using customer feedback data from structured Excel files. The system processes responses, classifies sentiment trends, and generates insights to measure customer satisfaction and identify improvement areas.',
    techStack: ['N8n', 'Excel', 'Webhooks'],
    impact: 'Generated insights on customer satisfaction by analyzing sentiment from feedback data.',
    category: 'Automation',
  },
];

export const techStack = {
  'Programming & Scripting': ['Python', 'JavaScript', 'SQL', 'Postgres SQL', 'Node.js', 'C/C++', 'Java'],
  'Web Development': ['React.js', 'HTML/CSS', 'RESTful APIs', 'FastAPI', 'MongoDB', 'PostgreSQL'],
  'Automation & Tools': ['n8n', 'Zapier', 'Git'],
  'Cloud Platforms': ['AWS (AWS Academy certified)', 'Google Cloud'],
  'Development Tools': ['Unity', 'Blender', 'Android Studio'],
};

export type Experience = {
    role: string;
    organization: string;
    duration: string;
    responsibilities: string[];
    technologies: string[];
};

export const experiences: Experience[] = [
    {
        role: 'Software Developer',
        organization: 'Binx Smart Life',
        duration: 'December 2025 – Present',
        responsibilities: [
            'Developing internal business management system to automate workflows across billing, inventory, reporting, and multi-branch operation'
        ],
        technologies: []
    }
];


export type EducationItem = {
    qualification: string;
    institution: string;
    location: string;
    duration: string;
};

export const education: EducationItem[] = [
    {
        qualification: 'Bachelors in Computer Science',
        institution: 'Christ (Deemed to be University)',
        location: 'Bangalore',
        duration: '2023 – present'
    },
    {
        qualification: 'Senior Secondary Education (Science – PCMC)',
        institution: 'Christ Junior College',
        location: 'Bangalore',
        duration: '2021 – 2023'
    }
];
