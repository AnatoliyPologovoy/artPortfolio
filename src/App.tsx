import { Promo } from "@/UI/promo/Promo";
import { AboutMe } from "@/UI/aboutMe/AboutMe";
import { Skills } from "@/UI/skills/skills";
import { MyProject } from "@/UI/myProject/myProject";
import { Contacts } from "@/UI/contacts/contacts";
import { Footer } from "@/UI/footer/footer";
import "@/styles/index.sass";

function App() {
  return (
    <div>
      <Promo />
      <AboutMe />
      <Skills />
      <MyProject />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
