import parentStyles from "./../page.module.css";
import styles from "./page.module.css";
import Info from "./_components/Info";
import Characteristics from "./_components/Characteristics";
import Skills from "./_components/Skills";
import Status from "./_components/Status";
import Combat from "./_components/Combat";

import { characterData } from "../../gameData/characterData/character.js";
const skills = characterData.skills;
const info = characterData.info;
const characteristics = characterData.characteristics;
const status = characterData.status;
const combatStats = characterData.combatStats;
const weapons = characterData.possessions.weapons;

const CharacterSheet = () => {
  return (
    <div className={parentStyles.pageContainer}>
      <Info info={info} />
      <Characteristics characteristics={characteristics} />
      <div className={styles.doubleSectionRow}>
        <Skills skills={skills} />
        <Status status={status} />
      </div>
      <Combat combatStats={combatStats} weapons={weapons} />
    </div>
  );
};

export default CharacterSheet;
