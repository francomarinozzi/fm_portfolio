export const personalInfo = {
  name: "Franco Marinozzi",
  role: "Software Developer & CS Student",
  avatar: "/assets/fm_icon.webp",
  bio: "Computer Science student. Fascinated by how computers work since childhood, I’m passionate about building solid software and diving into new technologies."
};

const defaultLogo = "/images/webscraping-logo.gif"

export const workExperience = [
  {
    company: "West Digital Alliance",
    role: "Backend & Cloud Developer",
    period: "Present", // inferred
    description: "I architect and build backend systems from the ground up — from requirements analysis and architectural decisions to the Azure infrastructure and CI/CD pipelines that run them.",
    // Names must match skillGroups entries to reuse their icons and categories
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Microsoft Azure", "Docker", "CI/CD", "Linux", "n8n", "Playwright", "JavaScript", "Web Scraping", "Git", "Postman"],
    responsibilities: [
      {
        area: "analysis & architecture",
        items: [
          "Gather and analyze requirements, turning business needs into technical solutions.",
          "Make architectural decisions across projects: system design, technology choices, and how services are structured and deployed."
        ]
      },
      {
        area: "backend",
        items: [
          "Architect and implement multiple backend systems from the ground up, designing scalable REST APIs with Java and Spring Boot.",
          "Integrate a range of third-party services and external APIs."
        ]
      },
      {
        area: "cloud & devops",
        items: [
          "Manage infrastructure on Microsoft Azure: Container Apps, Azure Database for PostgreSQL, Static Web Apps, Storage Accounts and Ubuntu Virtual Machines, among others.",
          "Own deployments through GitHub Actions pipelines, including troubleshooting and fixing CI/CD failures."
        ]
      },
      {
        area: "data & automation",
        items: [
          "Administer PostgreSQL databases.",
          "Automate workflows with n8n and JavaScript scripts.",
          "Build web scraping scripts with Playwright (JavaScript)."
        ]
      }
    ]
  }
];

export const skillGroups = [
  {
    label: "backend",
    items: [
      { name: "Java", icon: "/images/java-logo.png" },
      { name: "Spring Boot", icon: "/images/springboot-logo.png" },
      { name: "Spring Security", icon: null },
      { name: "Hibernate / JPA", icon: null },
      { name: "TypeScript", icon: "/images/typescript-logo.png" },
      { name: "NestJS", icon: null },
      { name: "REST API Design", icon: "/images/restapi-logo.png" },
      { name: "PostgreSQL", icon: "/images/PostgresSQL-logo.png" },
      { name: "MySQL", icon: "/images/mysql-logo.png" }
    ]
  },
  {
    label: "cloud & devops",
    items: [
      { name: "Microsoft Azure", icon: "/images/azure-logo.png" },
      { name: "Docker", icon: "/images/Docker-logo.png" },
      { name: "CI/CD", icon: "/images/GitHub Actions-logo.png" },
      { name: "Linux", icon: "/images/Linux-logo.png" }
    ]
  },
  {
    label: "automation",
    items: [
      { name: "n8n", icon: "/images/n8n-logo.png" },
      { name: "Playwright", icon: "/images/playwright-logo.png" },
      { name: "JavaScript", icon: null },
      { name: "Web Scraping", icon: defaultLogo }
    ]
  },
  {
    label: "tools & practices",
    items: [
      { name: "Git", icon: "/images/Git-logo.png" },
      { name: "Postman", icon: "/images/postman-logo.png" },
      { name: "System Design", icon: null },
      { name: "Scrum / Agile", icon: null },
      { name: "Technical Documentation", icon: null },
      { name: "AI-assisted Development", icon: null }
    ]
  }
];

export const projects = [
  {
    title: "Logistics Management System - Cost rates module",
    type: "Academic & Professional Practice",
    status: "Completed",
    description: "A comprehensive logistics software solution developed as a final degree project, demonstrating full-cycle development capabilities.",
    fullDescription: "Final project for my Associate degree where I primarily focused on backend development along with other key responsibilities. It is a web application designed for dynamic cost rate management and report visualization for a logistics company.\n\nFollowing my graduation, this project served as the basis for my Supervised Professional Internship (PPS). During this phase, development continued with the integration of multiple modules as microservices, presenting the challenge of coordinating work and deliveries across three different development groups.\n\nWe utilized Scrum methodology to optimize teamwork and workflow. Backend was developed as a REST API using Java + Spring Boot, with Hibernate ORM connecting to a MySQL database. Both backend and database were deployed on Render, while all frontend modules were hosted on Netlify.\n\nThis project was officially presented and approved by the university's board of directors.",
    technologies: [
      { name: "Java", icon: "/images/java-logo.png" },
      { name: "Spring Boot", icon: "/images/springboot-logo.png" },
      { name: "Docker", icon: "/images/Docker-logo.png" },
      { name: "MySQL", icon: "/images/mysql-logo.png" }
    ],
    features: [
      "Dynamic cost rate management system",
      "Integration with other modules of the same app, working as microservices infrastructure",
      "CI/CD working on different environments such as development, staging and production.",
      "Database design and optimization",
      "Formal technical documentation delivery(requirements, diagrams,design, deployment guides)",
      "Group work following agile methodologies (scrumban), working across sprints, planning and review meetings"
    ],



    media: {
      gallery: [
        "/assets/pps-foto.jpg",
        "/assets/acme-1.png",
        "/assets/acme-2.png",
        "/assets/acme-3.png",
        "/assets/acme-4.png",
        "/assets/acme-5.png"
      ],
      galleryCaptions: [
        "Post-presentation of the 3 application development groups",
        "Cost rate reports - View 1",
        "Cost rate reports - View 2",
        "Cost rate reports - View 3",
        "Cost rate reports - View 4",
        "Cost rate reports - View 5"
      ]
    },
    links: {
      backend: "https://github.com/DesApp-2025c1-Grupo-2/tarifas-de-costos-backend"
    },
    challenges: [
      "Integrating with other application modules (invoices, trips) while maintaining coherence across different development groups.",
      "Constant delivery cycles following a Scrumban workflow.",
      "Environment containerization using Docker for dev, stage, and production stages.",
      "Comprehensive technical documentation including functional/non-functional requirements and deployment guides."
    ]
  },
  {
    title: "Pasta Factory Management",
    type: "Personal Project",
    //status: "Completed",
    description: "A management application for a pasta factory, my family's business where I worked for many years.",
    fullDescription: "This is a management application for a pasta factory, my family's business where I worked for many years. You can find the repositories below.\n\nThe application's purpose is to facilitate sales management, allowing:\n• Control of products, with their price and stock\n• Dynamic sales creation\n• Maintain a history of completed sales with details of each one\n• Manage orders by handling them through different states\n\nBackend was developed in Java + Spring Boot and frontend is React + TypeScript, primarily using MUI components.\n\nI was invited to present this project at an engineering event at my university.",
    technologies: [
      { name: "Java", icon: "/images/java-logo.png" },
      { name: "Spring Boot", icon: "/images/springboot-logo.png" },
      { name: "React", icon: "/images/react-logo.png" },
      { name: "TypeScript", icon: "/images/typescript-logo.png" },
      { name: "MUI", icon: "/images/mui-logo.png" }
    ],
    features: [
      "Product management with price and stock control",
      "Dynamic sales creation system",
      "Complete sales history with detailed records",
      "Order management with state tracking",
      "Real-time inventory updates"
    ],
    media: {
      image: "/images/presentacion-lbapp.JPG",
      video: "/assets/video-lbapp.mp4"
    },
    links: {
      frontend: "https://github.com/francomarinozzi/lablanquita_frontend",
      backend: "https://github.com/francomarinozzi/back_lablanquita_SpringBoot"
    },
    challenges: []
  }
];

// status: "studying" = actively learning now, "exploring" = on the radar
export const futureInterests = [
  { name: "Software Architecture", status: "studying" },
  { name: "Cloud Computing", status: "studying" },
  { name: "Networking", status: "studying" }
];

// status: "earned" or "in-progress". url is optional (credential / verification link)
export const certifications: {
  name: string;
  issuer: string;
  date: string;
  status: "earned" | "in-progress";
  url?: string;
  credentialId?: string;
}[] = [
  { name: "n8n + MCP: Automatización y agentes de IA inteligentes", issuer: "DevTalles", date: "Oct 2025", status: "earned", credentialId: "ag7mggrssn" },
  { name: "PostgreSQL Database Administration", issuer: "CDAC Kolkata", date: "Nov 2024", status: "earned" },
  { name: "Curso de armado y reparación de computadoras", issuer: "UTN Buenos Aires", date: "Jul 2020", status: "earned" },
];

export const hobbies = [
  "Playing Guitar",
  "Rock & Heavy Metal Music"
];

export const aboutMe = {
  description: "Beyond the code, I am an avid musician. Playing guitar and exploring new music fuels my creativity and provides a rhythmic balance to my technical endeavors."
};

export const contactInfo = {
  github: "https://github.com/francomarinozzi",
  linkedin: "https://www.linkedin.com/in/franco-marinozzi-377127254/",
  phone: "+5491156350137",
  email: "francomarinozzi4@gmail.com"
};
