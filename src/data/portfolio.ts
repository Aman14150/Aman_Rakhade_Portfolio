export type ProjectEntry = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  href?: string;
};

export const profile = {
  name: "Aman R. Rakhade",
  title: "AI Engineer",
  location: "Nagpur, India",
  portrait: "/Aman_Photo.jpeg",
  email: "amanrakhade14@gmail.com",
  phone: "+91 9637799513",
  linkedin: "https://www.linkedin.com/in/aman-rakhade-0a9488319",
  github: "https://github.com/Aman14150",
  resume: "/Aman_Rakhade_Resume.pdf",
  heroSummary:
    "I build AI applications, document automation, and voice assistants, from backend APIs to web interfaces.",
  availability: "For opportunities in AI engineering and full-stack development, get in touch.",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    company: "MaSyCoDa Solutions Pvt. Ltd.",
    role: "AI Engineer",
    period: "Nov 2025 - Present",
    bullets: [
      "Build AI applications for recruitment and healthcare, including resume screening, claims analysis, and clinical document processing.",
      "Develop Python APIs and automated workflows to extract information, match records, and route documents for review, with validation and error handling.",
      "Work on multilingual voice assistance for hospital enquiries and appointments, connecting AI services with business systems and user interfaces.",
    ],
  },
  {
    company: "Web Beta Pvt. Ltd.",
    role: "Web Developer Intern",
    period: "Jul 2024 - Dec 2024",
    bullets: [
      "Delivered responsive web applications using MERN, PHP, SQL, HTML, CSS, and JavaScript across client-facing modules.",
      "Improved page load time by 25% through UI optimization and responsive design improvements.",
      "Built and implemented REST APIs, streamlining data retrieval and reducing API response time by 30%.",
    ],
  },
  {
    company: "Codemate IT Services (OPC) Pvt. Ltd.",
    role: "MERN Stack Developer Intern",
    period: "Jan 2024 - Apr 2024",
    bullets: [
      "Built full-stack features using MongoDB, Express.js, React.js, and Node.js across CRUD workflows.",
      "Applied REST API design principles to support clean client-server integration.",
    ],
  },
  {
    company: "ANKHUB Technology Services",
    role: "Frontend Developer Intern",
    period: "Sep 2023 - Oct 2023",
    bullets: [
      "Built responsive interfaces using HTML, CSS, JavaScript, and Bootstrap for user-facing web experiences.",
      "Improved user engagement by 20% through stronger layout and interaction quality.",
      "Reduced bounce rate by 30% with more usable, performance-aware frontend implementation.",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "TalentMatchAI",
    subtitle: "AI resume screening platform",
    period: "Dec 2025 - Present",
    description:
      "A recruiter workflow that turns unstructured resumes into ranked shortlists with clear scoring and faster review.",
    problem:
      "Resumes arrived in different formats, making manual comparison slow and inconsistent.",
    solution:
      "Extracted resume text, matched skills and experience to job requirements, and showed reviewers a 100-point score with a clear breakdown.",
    impact: "Reduced manual screening effort by approximately 80%, with a transparent 100-point scoring model.",
    stack: ["Python", "FastAPI", "React", "Azure OpenAI", "Document Intelligence", "Azure Web App"],
    // The previous public demo returns HTTP 403; direct visitors to Contact.
  },
  {
    title: "Cognitive Claims Intelligence",
    subtitle: "AI analysis for claims, policies, and financial documents",
    period: "Dec 2025 - Jun 2026",
    description:
      "A searchable claims workspace connecting policy information, claim decisions, and financial summaries.",
    problem:
      "Fragmented claims, policy, and financial records required extensive manual investigation and made decisions difficult to explain.",
    solution:
      "Combined claim, policy, and financial records into a searchable workspace so teams could check eligibility, understand decisions, and prepare payment summaries.",
    impact: "The solution reports 99.8% model accuracy and standardized outputs for reporting and reconciliation.",
    stack: ["SharePoint", "Azure Document Intelligence", "Synapse", "Data Lake", "Microsoft Fabric", "Azure AI Search", "Azure OpenAI"],
  },
  {
    title: "AI Fax Processing Integration",
    subtitle: "Clinical fax intake and NextGen workflow integration",
    period: "Feb 2026 - Present",
    description:
      "An automated clinical fax workflow for classification, extraction, patient matching, and task routing.",
    problem:
      "Manual fax review and inconsistent patient information slowed routing and increased the risk of incomplete records.",
    solution:
      "Classified incoming faxes, extracted patient details, matched existing records, and created NextGen tasks. Incomplete or unclear documents were sent to staff for review.",
    impact: "Reported solution accuracy improved from 90.3% to 93.4%; accuracy above 95% remains an enhancement target.",
    stack: ["Azure AI Content Understanding", "Logic Apps", "Azure Functions", "OneLake", "SQL Server", "NextGen EMR"],
  },
  {
    title: "MediAssist: Intelligent Hospital Receptionist",
    subtitle: "Multilingual patient support through voice and chat",
    period: "2026",
    description:
      "A hospital assistant for patient enquiries, doctor discovery, appointments, and department routing.",
    problem:
      "Routine patient calls occupied reception teams and contributed to missed calls and longer wait times.",
    solution:
      "Designed voice and chat support for hospital questions, doctor availability, and appointment booking or changes, with handoff to staff when needed.",
    impact: "The solution reports a 60-70% reduction in routine interactions and supports 24/7 patient assistance.",
    stack: ["ElevenLabs", "RAG", "Azure Functions", "Azure Table Storage", "Microsoft Graph", "Microsoft 365 Calendar"],
  },
  {
    title: "Yojna Chat",
    subtitle: "Multilingual government schemes assistant",
    period: "Feb 2025 - May 2025",
    description:
      "A public-information assistant built to make official scheme guidance easier to discover in text and voice.",
    problem:
      "Government scheme information was fragmented, hard to search, and less accessible for multilingual users.",
    solution:
      "Built a multilingual RAG assistant with live portal scraping, speech recognition, and text-to-speech.",
    impact: "Delivered live scheme retrieval with voice and text responses sourced from official data.",
    stack: ["Python", "OpenAI GPT API", "QDrant", "Whisper", "TTS", "Crawl4AI"],
  },
  {
    title: "Diabetes Prediction System",
    subtitle: "ML prediction web application",
    period: "Oct 2025",
    description:
      "A clinical-style prediction workflow combining model inference, dashboards, and stored patient data.",
    problem:
      "Prediction workflows for patient assessment needed to be faster and easier to use in a web environment.",
    solution:
      "Built a Flask application using Random Forest, MySQL-backed records, and an interactive prediction dashboard.",
    impact: "Reached 92% model accuracy and improved prediction efficiency by 30%.",
    stack: ["Python", "Flask", "MySQL", "JavaScript", "HTML5", "CSS3"],
    // Public demo timed out during review; use the contact action until reliable.
  },
  {
    title: "DoctorDoor",
    subtitle: "Clinic management system",
    period: "Aug 2025",
    description:
      "An operational dashboard for clinic workflows with role-based access and appointment management.",
    problem:
      "Clinic operations needed cleaner appointment handling and stronger access control across staff workflows.",
    solution:
      "Built a Spring Boot system with role-based login, CRUD modules, dashboards, and optimized service-layer queries.",
    impact: "Improved appointment tracking efficiency by 30%.",
    stack: ["Java", "Spring Boot", "Hibernate", "MySQL", "JavaScript"],
  },
  {
    title: "WorkHub Manager",
    subtitle: "Collaborative task dashboard",
    period: "Nov 2024 - Dec 2024",
    description:
      "A team productivity dashboard built around tracking, collaboration, and secure access.",
    problem:
      "Teams needed a shared task workflow with clear ownership, chat, and role-based access.",
    solution:
      "Built a MERN dashboard with task management, authentication, role controls, and socket-based communication.",
    impact: "Improved reported team productivity by 20%.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
  },
];

export const skillGroups = [
  {
    title: "AI and Data",
    items: [
      "Python",
      "Azure OpenAI",
      "Document Intelligence",
      "Copilot",
      "RAG",
      "Agentic AI",
      "Prompt Engineering",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Whisper",
    ],
  },
  {
    title: "Frontend and Product",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "Interaction Design",
      "Dashboard Design",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend and Databases",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "Spring Boot",
      "Flask",
      "REST APIs",
      "MySQL",
      "MongoDB",
    ],
  },
  { title: "Cloud and Tools", items: ["Microsoft Azure", "Google Cloud", "AWS", "Git", "Postman", "VS Code"] },
];

export const certifications = [
  {
    title: "Microsoft IQ Series: Foundry IQ",
    issuer: "Global AI Community",
    date: "May 2026",
    type: "Badge",
  },
  {
    title: "AWS SimuLearn - AI Practitioner",
    issuer: "Amazon Web Services",
    date: "July 2026",
    type: "Training badge",
  },
];
