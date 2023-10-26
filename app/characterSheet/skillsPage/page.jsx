import SkillCard from "./_components/SkillCard";
import { skills } from "../../../gameData/skills";
import DecoratedTitle from "../_components/DecoratedTitle";

const SkillsPage = () => {
  return (
    <>
      {/* TODO: make skill list fiterable */}
      {/* <input type="text" placeholder="Filter" /> */}

      <DecoratedTitle title="skills" />

      {skills.map((skill, i) => {
        return <SkillCard key={i} skill={skill} />;
      })}
      {/* <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard /> */}
    </>
  );
};

export default SkillsPage;
