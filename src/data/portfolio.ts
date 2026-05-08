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
  title: "Azure AI Engineer",
  timeframe: "Available in 2026",
  location: "Nagpur, India",
  portrait: "/Aman_Photo.jpeg",
  email: "amanrakhade14@gmail.com",
  phone: "+91 9637799513",
  linkedin: "https://www.linkedin.com/in/aman-rakhade-0a9488319",
  github: "https://github.com/Aman14150",
  resume: "/Aman_Rakhade_Resume.pdf",
  signature:
    "Azure AI Engineer building document workflows, retrieval systems, and product-grade web applications.",
  availabilityStatus: "Open to Azure AI Engineer, Applied GenAI, and full-stack product roles.",
  heroSummary:
    "I build Azure AI products that turn document workflows, retrieval, and backend orchestration into reliable tools teams can actually use.",
  longSummary:
    "I work across AI services, APIs, and frontend systems to turn messy business workflows into software that is usable, reliable, and measurable in production.",
  availability:
    "Open to Azure AI, applied GenAI, and product-focused full-stack roles where model capability needs disciplined execution.",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "Azure AI", label: "core focus" },
  { value: "5", label: "shipped builds" },
  { value: "3", label: "industry internships" },
  { value: "98%+", label: "resume extraction accuracy" },
];

export const heroTags = [
  "Azure AI",
  "OpenAI & RAG",
  "Document Intelligence",
  "FastAPI APIs",
  "Next.js UI",
  "Agentic Workflows",
];

export const focusAreas = [
  {
    title: "Azure AI Delivery",
    description:
      "Building solutions with Azure OpenAI, document intelligence, retrieval pipelines, and production-ready service integration.",
  },
  {
    title: "Backend to Frontend Ownership",
    description:
      "Shipping APIs, orchestration logic, dashboards, and usable interfaces as one system instead of disconnected layers.",
  },
  {
    title: "Product-Focused Execution",
    description:
      "Optimizing for recruiter, operator, and end-user clarity so AI features feel practical, not experimental.",
  },
];

export const experiences = [
  {
    company: "MaSyCoDa Solutions Pvt. Ltd.",
    role: "AI Engineer",
    period: "Nov 2025 - Present",
    bullets: [
      "Designed Azure AI workflows for document processing with Azure OpenAI, Copilot, and Cognitive Services, reducing manual effort by 40%.",
      "Built generative AI applications with advanced prompt engineering and NLP-based data extraction pipelines for unstructured documents, improving extraction accuracy.",
      "Developed Agentic AI workflows and optimized LLM inference, reducing response latency by 25%.",
      "Implemented scalable AI solutions on Microsoft Azure, translating business requirements into production-ready systems handling enterprise-scale workloads.",
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
      "Strengthened delivery discipline across debugging, structure, and implementation quality.",
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
    subtitle: "Azure AI resume screening platform",
    period: "Jan 2026 - Feb 2026",
    description:
      "A recruiter workflow that turns unstructured resumes into ranked shortlists with clear scoring and faster review.",
    problem:
      "Recruiters were reviewing resumes manually across inconsistent formats, which slowed shortlisting and created noisy matches.",
    solution:
      "Built an Azure AI workflow with Document Intelligence, semantic matching, scoring, and recruiter-facing dashboards.",
    impact: "98%+ extraction accuracy, ~90% improvement in candidate-job matching efficiency, and ~80% reduction in manual screening effort.",
    stack: ["Python", "FastAPI", "React", "Azure OpenAI", "Document Intelligence", "Azure Web App"],
    href: "https://talentmatchai-gugddpgsdfbcc8gr.centralindia-01.azurewebsites.net/",
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
    href: "https://diabetes-prediction-system-tbty.onrender.com",
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
    title: "Backend and Platforms",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "Spring Boot",
      "Flask",
      "REST APIs",
      "Microsoft Azure",
      "MySQL",
      "MongoDB",
      "Git",
      "Postman",
      "VS Code",
    ],
  },
];

export const education = [
  {
    institution: "G H Raisoni College of Engineering and Management, Nagpur",
    detail: "B.Tech in Artificial Intelligence",
    period: "2025",
    meta: "CGPA 7.9/10",
  },
  {
    institution: "Shri Vidyavati Deodia High School Or College, Nagpur",
    detail: "HSC, Science",
    period: "2021",
    meta: "85.67%",
  },
  {
    institution: "Bhonsala Military School, Nagpur",
    detail: "SSC, Science",
    period: "2019",
    meta: "82.20%",
  },
];

export const highlights = [
  "Delivers Azure AI workflows that reduce manual review and improve operational speed.",
  "Owns backend architecture, frontend delivery, and applied GenAI implementation end to end.",
  "Best fit for teams that care more about measurable outcomes than demo polish.",
];

export const currentFocus = [
  {
    title: "Azure AI workflows",
    description:
      "Shipping document intelligence, retrieval, prompting, and orchestration into systems teams can operate.",
  },
  {
    title: "Production interfaces",
    description:
      "Making AI features understandable through faster dashboards, cleaner states, and stronger UX decisions.",
  },
  {
    title: "Measured impact",
    description:
      "Prioritizing time saved, response quality, and workflow clarity over AI novelty alone.",
  },
];

export const principles = [
  {
    title: "Clear over clever",
    description:
      "I prefer systems that are easy to explain, maintain, and ship over solutions that are impressive but fragile.",
  },
  {
    title: "Product before feature",
    description:
      "Every AI workflow should feel useful in context, not just technically possible.",
  },
  {
    title: "Systems thinking",
    description:
      "Model quality matters, but APIs, reliability, UX, and deployment are what make it valuable in production.",
  },
];
