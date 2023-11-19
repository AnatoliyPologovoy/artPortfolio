import s from "@/UI/aboutMe/aboutMe.module.sass";
import photo from "@/assets/photo.jpg"

export const AboutMe = () => {
	return (
			<div className={s.aboutMe}>
				<div className={s.contentWrapper}>
					<div className={s.content}>
						<div className={s.textContent}><span className={s.desc}>
							Expert Front-end Developer
						</span>
							<h2 className={s.title}>About Me</h2>
							<span className={s.text}>Welcome to my portfolio site. My name is Anatoliy Pologovoy and I am a front-end developer.</span>
							<span className={s.text}>On my site you can find examples of my projects, as well as my skills in using the React.JS library. If you liked my work, contact me.</span>
							<a href={'#'} className={s.button}>Download CV</a>
						</div>
						<div className={s.photo}>
							<img src={photo} alt="Portret yang white man" className={s.pic} />
						</div>
					</div>
				</div>
			</div>
	);
};