import parentStyles from "./../page.module.css";
import Info from "./_components/Info";
import Characteristics from "./_components/Characteristics";
import InvestigatorSkills from "./_components/InvestigatorSkills";
import Status from "./_components/Status";
import Combat from "./_components/Combat";

const CharacterSheet = () => {
  return (
    <div className={parentStyles.pageContainer}>
      <Info />
      <Characteristics />
      <InvestigatorSkills />
      <Status />
      <Combat />
    </div>
  );
};

export default CharacterSheet;
