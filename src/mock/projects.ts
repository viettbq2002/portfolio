import { AngularIcon, DockerIcon, DotnetIcon, JotaiIcon, MantineIcon, RabbitMQIcon, ReactIcon } from "@/components/custom-icon/react-icon";
import {
  IconActivity,
  IconArchive,
  IconChartInfographic,
  IconCheckbox,
  IconChisel,
  IconColorPicker,
  IconCreditCard,
  IconFilter,
  IconMicroscope,
  IconPhotoScan,
  IconTestPipe,
  IconUser,
  IconUserStar,
} from "@tabler/icons-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  role: string[];
  objective: string;
  features?: Features[];
  techStack: TechStack[];
}
export interface Features {
  name: string;
  description: string;
  icon: any;
}
export interface TechStack {
  name: string;
  icon: any;
}
export const listProject: Project[] = [
  {
    id: 1,
    title: "SMARTLAB - EXPERIMENTAL DATA MANAGEMENT SYSTEM IN AGRICULTURE",
    description:
      "Tailored for agricultural laboratories addresses the specific needs of managing laboratory workflows, tracking experiments, inventory management, and identifying various strains of diseases affecting rice crops by ISO 17025 standards.",
    thumbnail: "/SmartLabImage/Statistical.png",
    role: ["Full Stack Developer", "Software Architect"],
    objective:
      "Practical experience with distributed systems, microservice architecture design, databases, learning asynchronous communication within distributed systems using RabbitMQ, load balancing, working with infrastructure in distributed systems such as Ubuntu, SQL Server, Docker, designing and building visually appealing, user-friendly, and easy-to-use single-page UIs, handling complex logic such as statistics, timelines, etc.",
    features: [
      {
        name: "Account Managment",
        description: "Admin feature, include good ui filtering, and statistical analysis",
        icon: IconUser,
      },
      {
        name: "Plan & Subscription Management",
        description: "Upgrade plan to explore Smart Lab system and subscription management feature for admin",
        icon: IconCreditCard,
      },
      {
        name: "Laboratory Management",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconChartInfographic,
      },
      {
        name: "Experiment Management",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconMicroscope,
      },
      {
        name: "Batch Management",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconArchive,
      },
      {
        name: "Sample Management",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconColorPicker,
      },
      {
        name: "Test Management",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconTestPipe,
      },
      {
        name: "Equipment Management",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconChisel,
      },
      {
        name: "Survey Management",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconCheckbox,
      },
      {
        name: "Rating Management",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconUserStar,
      },
      {
        name: "Disease Prediction",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconPhotoScan,
      },
      {
        name: "Activity Tracking",
        description: "Helping Lab Owner managment laboratory Include good ui filtering, timeline, and statistical analysis",
        icon: IconActivity,
      },
    ],
    techStack: [
      {
        name: "React JS",
        icon: ReactIcon,
      },
      {
        name: "Rabbit MQ",
        icon: RabbitMQIcon,
      },
      {
        name: ".NET Core 7.0",
        icon: DotnetIcon,
      },
      {
        name: "Jotai",
        icon: JotaiIcon,
      },
      {
        name: "MassTransit",
        icon: ReactIcon,
      },
      {
        name: "Docker",
        icon: DockerIcon,
      },
      {
        name: "SQL Server ",
        icon: ReactIcon,
      },
      {
        name: "Mantine UI",
        icon: MantineIcon,
      },
    ],
  },
  {
    id: 2,
    title: "TRIVIDI BOOKING - HOTEL AND RESORT BOOKING ONLINE SYSTEM",
    description:
      "TRIVIDI BOOKING simplifies hotel and resort reservations through its intuitive web app. With a wide array of accommodations and personalized search options, TRIVIDI offers travelers a seamless booking experience.",

    thumbnail: "/TrividiBookingImage/HotelSearch.png",
    role: ["Full Stack Developer"],
    objective:
      "In my first full-stack project, I built a sleek user interface with React JS. For the backend, I explored service-oriented architecture (SOA) and implemented it in a distributed system. To ramp up security, I integrated JWT authentication and authorization. This project solidified my full-stack skills, introduced modern software architecture, and secured the application with JWT. I'm excited to keep learning and build beautiful, functional, and secure web apps as a developer!",
    features: [
      {
        name: "Hotel Filtering",
        description: "Filtering and search hotel by name, location, and price,rating and services",
        icon: IconFilter,
      },
    ],
    techStack: [
      {
        name: "React JS",
        icon: ReactIcon,
      },
    ],
  },
  {
    id: 3,
    title: "Learning Management System - Frontend ",
    role: ["Frontend Developer, Team Leader"],
    description:
      "FPT Software Internship Project designed to facilitate the management, delivery, and tracking of educational content and training programs. It provides tools for course creation, assessment, communication, and administration",

    thumbnail: "/LearningManagementSystem/ViewProgram_detail.png",
    techStack: [
      {
        name: "Angular",
        icon: AngularIcon,
      },
      {
        name: "Ng-Prime",
        icon: AngularIcon,
      },
    ],
  },
  {
    id: 4,
    title: "Viet Portfolio",
    description:
      "Personal website for learning NextJS Process, including my information, projects, and contact information. I am excited to work with you on your next project!",

    thumbnail: "/Portfolio/PortfolioScreenShot.png",
  },
];
