import s from "@/UI/skills/skills.module.sass";
import html from "@/assets/html.png";
import css from "@/assets/css.png";
import js from "@/assets/js.png";
import react from "@/assets/react.png";

const content = [
  {
    title: "HTML5",
    text: "The correct use of block names with tags to create semantic layout. Using html to create any blocks on the site.",
    pic: html,
  },
  {
    title: "CSS3",
    text: "The use of CSS to style the site, also cross-browser layout, semantic layout, Material UI. Using a variety of libraries and animations.",
    pic: css,
  },
  {
    title: "JavaScript",
    text: "Using JavaScript to write logic. Understanding the structure of the tree virtual DOM. knowledge of the principles of object-oriented programming.",
    pic: js,
  },
  {
    title: "React",
    text: "Using the React.js library to write applications. FLUX Cycle, HOC, REST API, react-redux, AJAX, axios. Understanding the component life cycle and asynchronous queries and operations.",
    pic: react,
  },
];

export const Skills = () => {
  const items = content.map((el, i) => (
    <SkillItem pic={el.pic} title={el.title} text={el.text} key={i} />
  ));
  return (
    <div className={s.skills}>
      <div className={s.contentWrapper}>
        <div className={s.skillsInner}>
          <h2 className={s.title}>My skills</h2>
          <div className={s.items}>{items}</div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  pic: string;
  title: string;
  text: string;
};

const SkillItem = ({ pic, text, title }: Props) => {
  return (
    <div className={s.item}>
      <img src={pic} alt="#" className={s.itemPic} width={100}/>
      <h3 className={s.itemTitle}>{title}</h3>
      <span className={s.itemText}>{text}</span>
    </div>
  );
};
