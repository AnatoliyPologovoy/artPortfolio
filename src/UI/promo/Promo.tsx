import s from "@/UI/promo/promo.module.sass";

export const Promo = () => {
  return (
    <div className={s.promo}>
      <div className={s.contentWrapper}>
        <div className={s.greetingWrapper}>
          <div className={s.greeting}>
            <span className={s.name}>I am Anatoliy Pologovoy</span>
            <h1 className={s.title}>Front-end developer</h1>
            <button className={s.button}>Contact me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
