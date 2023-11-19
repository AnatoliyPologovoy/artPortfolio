import s from "@/UI/myProject/myProject.module.sass";
import cards from "@/assets/cards.png";
import todo from "@/assets/todo-list.png";
import keksbookeng from "@/assets/keksobooking.png";

const content = [
  {
    pic: cards,
    title: "Flash cards",
    link: "https://cards-anatoliypologovoys-projects.vercel.app/",
  },
  {
    pic: todo,
    title: "Todo-list",
    link: "https://anatoliypologovoy.github.io/todolist",
  },
  {
    pic: keksbookeng,
    title: "Keksobooking",
    link: "https://anatoliypologovoy.github.io/keksobooking/",
  },
];

export const MyProject = () => {
  const items = content.map((el, i) => (
    <ProjectItem pic={el.pic} title={el.title} link={el.link} key={i}/>
  ));
  return (
    <div className={s.myProject}>
      <div className={s.contentWrapper}>
        <div className={s.myProjectInner}>
          <h2 className={s.title}>My Project</h2>
          <div className={s.items}>{items}</div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  pic: string;
  title: string;
  link: string;
};

const ProjectItem = ({ pic, title, link }: Props) => {
  return (
    <a className={s.item} href={link} target={'_blank'}>
      <img src={pic} alt="#" className={s.itemPic} />
      <div className={s.itemTitleBox}>
        <h3 className={s.itemTitle}>{title}</h3>
      </div>
    </a>
  );
};
