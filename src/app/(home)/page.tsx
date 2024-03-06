import AboutMe from "@/components/section/aboutMe/AboutMe";
import Main from "@/components/section/main/Main";
import Project from "@/components/section/project/Project";
import Skill from "@/components/section/skill/Skill";

export default function Home() {
  return (
    <main className="">
      <Main />
      <AboutMe />
      <Skill />
      <Project />
    </main>
  );
}
