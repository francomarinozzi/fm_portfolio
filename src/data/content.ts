export const personalInfo = {
  name: "Franco Marinozzi",
  role: "Software Developer & CS Student",
  avatar: "../assets/fm_icon.png", // Assuming we move the file here
  bio: "A technologist at heart, I blend academic rigor with practical expertise in backend systems and cloud infrastructure. Currently pursuing a Computer Science degree while architecting robust solutions."
};

const defaultLogo = "/images/webscraping-logo.gif"

export const workExperience = [
  {
    company: "Boombet",
    role: "Backend Developer & Cloud Infrastructure Manager",
    period: "Present", // inferred
    description: "Driving backend development and infrastructure management for a dynamic platform.",
    responsibilities: [
      "Architected and maintained backend services using Java and Spring Boot.",
      "Managed cloud infrastructure on Microsoft Azure, ensuring high availability and scalability.",
      "Database design and management (PostgreSQL) ",
      "Developed automation and web scraping scripts.",
      "Provided hardware and software troubleshooting to maintain system stability."
    ]
  }
];

export const skills = {
  backend: [
    { name: "Java", icon: "/images/java-logo.png" },
    { name: "Spring Boot", icon: "/images/springboot-logo.png" },
    { name: "PostgreSQL", icon: "/images/PostgresSQL-logo.png" },
    { name: "REST API Design", icon: defaultLogo },
    { name: "Postman", icon: "/images/postman-logo.png" }
  ],
  cloud: [
    { name: "Microsoft Azure", icon: "/images/azure-logo.png" },
    { name: "Docker", icon: "/images/Docker-logo.png" },
    { name: "CI/CD", icon: "/images/GitHub Actions-logo.png" }
  ],
  automation: [
    { name: "N8N", icon: "/images/n8n-logo.png" },
    { name: "Playwright", icon: "/images/playwright-logo.png" },
    { name: "Web Scraping", icon: "/images/webscraping-logo.gif" }
  ],
  general: [
    { name: "System Design", icon: defaultLogo }, //cambiar
    { name: "AI Integration", icon: defaultLogo }, //cambiar
    { name: "Linux", icon: "/images/Linux-logo.png" },
    { name: "Git", icon: "/images/Git-logo.png" }
  ]
};

export const projects = [
  {
    title: "Logistics Management System",
    type: "Academic & Professional Practice",
    status: "Completed",
    description: "A comprehensive logistics software solution developed as a final degree project, demonstrating full-cycle development capabilities.",
    technologies: ["Java", "Spring Boot", "Microservices", "Scrumban"],
    challenges: [
      "Implemented a robust backend architecture using Spring Boot.",
      "Designed a microservices-based infrastructure for modular integration.",
      "Collaborated within an agile team using Scrumban, managing sprints and deliverables effectively."
    ]
  },
  {
    title: "Pasta Factory Management",
    type: "Personal Project",
    status: "Near Completion",
    description: "A specialized management software tailored for manufacturing processes.",
    technologies: [], // inferred or to be added
    challenges: []
  }
];

export const futureInterests = [
  "Networking",
  "DevOps & Infrastructure",
  "Cybersecurity",
  "Linux"
];

export const hobbies = [
  "Playing Guitar",
  "Rock & Heavy Metal Music"
];

export const aboutMe = {
  description: "Beyond the code, I am an avid musician. Playing guitar and exploring new music fuels my creativity and provides a rhythmic balance to my technical endeavors."
};

export const contactInfo = {
  linkedin: "https://www.linkedin.com/in/franco-marinozzi-377127254/",
  phone: "+5491156350137",
  email: "francomarinozzi4@gmail.com"
};
