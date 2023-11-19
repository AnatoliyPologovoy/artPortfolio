import s from "@/UI/footer/footer.module.sass"
import {ReactComponent as Vk} from "@/assets/vk.svg"
import {ReactComponent as Telegram} from "@/assets/telegram.svg"
import {ReactComponent as Git} from "@/assets/git.svg"

export const Footer = () => {
	// const items = content.map((el) => (
	//   <ProjectItem pic={el.pic} title={el.title} link={el.link} />
	// ));
	return (
			<div className={s.footer}>
				<div className={s.contentWrapper}>
					<div className={s.footerInner}>
						<span className={s.name}>Anatoliy Pologovoy</span>
						<div className={s.social}>
							<a href="/#">
								<Vk/>
							</a>
							<a href="/#">
								<Telegram/>
							</a>
							<a href="/#">
								<Git/>
							</a>
						</div>
						<span className={s.copyright}>©2023 Все права защищены </span>
					</div>
				</div>
			</div>
	);
};
