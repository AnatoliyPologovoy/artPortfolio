import s from "@/UI/contacts/contacts.module.sass";
// import photo from "@/assets/photo.jpg"

export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.contentWrapper}>
        <div className={s.content}>
          <div className={s.address}>
            <div className={s.desc}>
              <h2 className={s.title}>My Contact</h2>
              <span className={s.text}>
                If you want to contact me, write your message in the form on the
                right and send me an e-mail. I will definitely read everything!
              </span>
            </div>
            <AddressItem title={"Address"} text={"Rostov-on-Don"} />
            <AddressItem title={"Phone"} text={"+7 960 687 44 53"} />
            <AddressItem title={"Email"} text={"photoje@mail.ru"} />
          </div>
          <div className={s.contactForm}>
            <h2 className={s.title}>Quick Contact Form</h2>
            <form action="/#" className={s.form}>
              <div className={s.formItem}>
                <input type="text" placeholder={'Your Name'} name={'name'}/>
                <input type="text" placeholder={'Your email'} name={'email'}/>
              </div>
              <div className={s.formItem}>
                <input type="text" placeholder={'Your Phone'} name={'phone'}/>
                <input type="text" placeholder={'Subject'} name={'subject'}/>
              </div>
              <textarea name="message" placeholder={'Your message'} className={s.textArea}></textarea>
              <button type={'submit'} className={s.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  title: string;
  text: string;
};

const AddressItem = ({ title, text }: Props) => {
  return (
    <div className={s.addressItem}>
      <h3 className={s.itemTitle}>{title}</h3>
      <span className={s.itemText}>{text}</span>
    </div>
  );
};
