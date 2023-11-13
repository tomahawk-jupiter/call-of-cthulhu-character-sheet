import SkillCard from "./_components/SkillCard";
// import { skills } from "../../../gameData/skills";
import { characterData } from "../../../gameData/characterData/character";
import DecoratedTitle from "../_components/DecoratedTitle";

const skills = characterData.skills;

const SkillsPage = () => {
  return (
    <>
      {/* TODO: make skill list filterable */}
      {/* <input type="text" placeholder="Filter" /> */}

      <DecoratedTitle title="skills" />

      {skills.map((skill, i) => {
        return <SkillCard key={i} skill={skill} />;
      })}
    </>
  );
};

export default SkillsPage;
