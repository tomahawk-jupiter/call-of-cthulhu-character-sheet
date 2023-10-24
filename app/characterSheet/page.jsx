import parentStyles from "./../page.module.css";
import Info from "./_components/Info";
import Characteristics from "./_components/Characteristics";
import Skills from "./_components/Skills";
import Status from "./_components/Status";
import Combat from "./_components/Combat";

const CharacterSheet = () => {
  return (
    <div className={parentStyles.pageContainer}>
      <Info />
      <Characteristics />
      <Skills />
      <Status />
      <Combat />
    </div>
  );
};

export default CharacterSheet;
