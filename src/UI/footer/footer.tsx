/// <reference types="vite-plugin-svgr/client" />
import s from "@/UI/footer/footer.module.sass"
import Vk from "@/assets/vk.svg?react"
import Telegram from "@/assets/telegram.svg?react"
import Git from "@/assets/git.svg?react"

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
