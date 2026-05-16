import {
  SiJira,
  SiConfluence,
  SiTrello,
  SiPostman,
  SiDocker,
  SiJenkins,
} from "react-icons/si";

export const stackData = [
  {
    category: "DEVOPS",
    technologies: [
      { name: "Docker", icon: <SiDocker size={50} color="#2496ED" /> },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Jenkins", icon: <SiJenkins size={50} color="#D24939" /> },
      { name: "GitHub Actions", icon: "devicon-github-original" },
      { name: "Terraform", icon: "devicon-terraform-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
  },
  {
    category: "SCRIPTING",
    technologies: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Bash", icon: "devicon-bash-plain" },
      { name: "Groovy", icon: "devicon-groovy-plain" },
    ],
  },
  {
    category: "FRONTEND",
    technologies: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Node.Js", icon: "devicon-nodejs-plain" },
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
