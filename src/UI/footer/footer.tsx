import s from "@/UI/footer/footer.module.sass"
import { ReactComponent as Vk } from "@/assets/vk.svg"

export const Footer = () => {
  // const items = content.map((el) => (
  //   <ProjectItem pic={el.pic} title={el.title} link={el.link} />
  // ));
  return (
    <div className={s.footer}>
      <div className={s.contentWrapper}>
        <div className={s.footerInner}>
          <h3 className={s.name}>Anatoliy Pologovoy</h3>
          <div className={s.social}>
            <a href="/#">
              <Vk/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
