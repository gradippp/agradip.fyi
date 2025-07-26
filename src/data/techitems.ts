import {
  BashOriginal,
  DockerOriginal,
  JavaOriginal,
  JavascriptOriginal,
  LinuxOriginal,
  MysqlOriginal,
  NginxOriginal,
  NodejsOriginal,
  PhpOriginal,
  PostgresqlOriginal,
  ReactOriginal,
  SpringOriginal,
} from "devicons-react";

export const TECH_ITEMS = [
  {
    category: "Programming Languages / Frameworks",
    items: [
      {
        name: "Java",
        icon: JavaOriginal,
      },
      {
        name: "JavaScript",
        icon: JavascriptOriginal,
      },
      {
        name: "PHP",
        icon: PhpOriginal,
      },
      {
        name: "Node.js",
        icon: NodejsOriginal,
      },
      {
        name: "Bash",
        icon: BashOriginal,
      },
      {
        name: "ReactJS",
        icon: ReactOriginal,
      },
      {
        name: "Spring",
        icon: SpringOriginal,
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "MySQL",
        icon: MysqlOriginal,
      },
      {
        name: "PostgreSQL",
        icon: PostgresqlOriginal,
      },
    ],
  },
  {
    category: "Sysadmin Stuff",
    items: [
      {
        name: "Linux",
        icon: LinuxOriginal,
      },
      {
        name: "Docker",
        icon: DockerOriginal,
      },
      {
        name: "Nginx",
        icon: NginxOriginal,
      },
    ],
  },
];
