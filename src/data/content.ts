export const personalInfo = {
  name: "Franco Marinozzi",
  role: "Software Developer & CS Student",
  avatar: "../assets/fm_icon.png", // Assuming we move the file here
  bio: "I’m a Programming Technician and Computer Science student. Fascinated by how computers work since childhood, I’m passionate about building solid software and diving into new technologies."
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
  cloud_Infrastructure: [
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
    fullDescription: "Final project for my technical degree where I primarily focused on backend development along with other key responsibilities. It is a web application designed for dynamic cost rate management and report visualization for a logistics company.\n\nFollowing my graduation, this project served as the basis for my Supervised Professional Internship (PPS). During this phase, development continued with the integration of multiple modules as microservices, presenting the challenge of coordinating work and deliveries across three different development groups.\n\nWe utilized Scrum methodology to optimize teamwork and workflow. The backend was developed as a REST API using Java + Spring Boot, with Hibernate ORM connecting to a MySQL database. Both the backend and database were deployed on Render, while all frontend modules were hosted on Netlify.\n\nThis project was officially presented and approved by the university's board of directors.",
    technologies: [
      { name: "Java", icon: "/images/java-logo.png" },
      { name: "Spring Boot", icon: "/images/springboot-logo.png" },
      { name: "Docker", icon: "/images/Docker-logo.png" },
      { name: "MySQL", icon: "/images/mysql-logo.png" }
    ],
    features: [
      "Dynamic cost rate management system",
      "Real-time report visualization",
      "Microservices architecture integration",
      "Database design and optimization",
      "Formal technical documentation delivery",
      "Multi-team collaboration and coordination"
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
    fullDescription: "This is a management application for a pasta factory, my family's business where I worked for many years. You can find the repositories below.\n\nThe application's purpose is to facilitate sales management, allowing:\n• Control of products, with their price and stock\n• Dynamic sales creation\n• Maintain a history of completed sales with details of each one\n• Manage orders by handling them through different states\n\nThe backend is developed in Java + Spring Boot and the frontend in React + TypeScript, primarily using MUI components.\n\nI was invited to present this project at an engineering event at my university.",
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
  github: "https://github.com/francomarinozzi",
  linkedin: "https://www.linkedin.com/in/franco-marinozzi-377127254/",
  phone: "+5491156350137",
  email: "francomarinozzi4@gmail.com"
};
