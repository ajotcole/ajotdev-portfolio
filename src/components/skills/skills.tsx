import { FaReact, FaNodeJs, FaJira } from "react-icons/fa";
import {
  SiTypescript,
  SiMicrosoftazure,
  SiDocker,
  SiMicrosoft,
  SiAdobexd,
} from "react-icons/si";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiGitMerge } from "react-icons/bi";
import styles from "./skills.module.scss";

export const Skills = () => {
  const skillData = [
    {
      title: "React",
      level: 5,
      icon: <FaReact />,
      iconColor: "#61DBFB",
    },
    {
      title: "TypeScript",
      level: 5,
      icon: <SiTypescript />,
      iconColor: "#007acc",
    },
    {
      title: "Azure",
      level: 4,
      icon: <SiMicrosoftazure />,
      iconColor: "#007FFF",
    },
    {
      title: "Git",
      level: 5,
      icon: <BiGitMerge />,
      iconColor: "#F1502F",
    },
    {
      title: "Docker",
      level: 3,
      icon: <SiDocker />,
      iconColor: "#0DB7ED",
    },
    {
      title: ".NET",
      level: 2,
      icon: <SiMicrosoft />,
      iconColor: "#0DB7ED",
    },
    {
      title: "NodeJS",
      level: 4,
      icon: <FaNodeJs />,
      iconColor: "#3C873A",
    },
    {
      title: "Adobe XD",
      level: 4,
      icon: <SiAdobexd />,
      iconColor: "#470137",
    },

    {
      title: "JIRA",
      level: 5,
      icon: <FaJira />,
      iconColor: "#0052CC",
    },
  ];

  return (
    <>
      {skillData
        .sort((a, b) => b.level - a.level)
        .map((x, i) => (
          <div className={styles.skillContainer} key={i}>
            <div style={{ verticalAlign: "middle" }}>
              <span style={{ color: x.iconColor }}>{x.icon}</span>
              <span>{x.title}</span>
            </div>
            <div>
              <AiFillStar />
              {x.level > 1 ? <AiFillStar /> : <AiOutlineStar />}
              {x.level > 2 ? <AiFillStar /> : <AiOutlineStar />}
              {x.level > 3 ? <AiFillStar /> : <AiOutlineStar />}
              {x.level > 4 ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          </div>
        ))}
    </>
  );
};
