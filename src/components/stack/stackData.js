import {
  SiJira,
  SiConfluence,
  SiTrello,
  SiPostman,
  SiDocker,
  SiJenkins,
  SiApachenetbeanside,
} from "react-icons/si";

export const stackData = [
  {
    category: "FRONTEND",
    technologies: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Redux", icon: "devicon-redux-original" },
      { name: "React Native", icon: "devicon-react-original" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss-plain" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "JQuery", icon: "devicon-jquery-plain" },
    ],
  },
  {
    category: "BACKEND",
    technologies: [
      { name: "Node.Js", icon: "devicon-nodejs-plain" },
      { name: "Express.Js", icon: "devicon-express-original" },
      { name: "NestJS", icon: "devicon-nestjs-plain" },
      {
        name: "RESTful APIs",
        icon: <SiApachenetbeanside size={50} color="#6D6E70" />,
      },
      { name: "Socket.IO", icon: "devicon-socketio-original" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
    ],
  },
  {
    category: "DEVOPS",
    technologies: [
      { name: "Docker", icon: <SiDocker size={50} color="#2496ED" /> },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "GitHub Actions", icon: "devicon-github-original" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Jenkins", icon: <SiJenkins size={50} color="#D24939" /> },
    ],
  },
  {
    category: "DATABASE",
    technologies: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "SQL", icon: "devicon-mysql-plain" },
    ],
  },
  {
    category: "TOOLS",
    technologies: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Postman", icon: <SiPostman size={50} color="#FF6C37" /> },
      { name: "Jira", icon: <SiJira size={50} color="#0052CC" /> },
      { name: "Trello", icon: <SiTrello size={50} color="#0079BF" /> },
      { name: "Confluence", icon: <SiConfluence size={50} color="#0052CC" /> },
      { name: "Figma", icon: "devicon-figma-plain" },
    ],
  },
];
