import CharactisticsField from "./CharacteristicsField";
import { characterData } from "@/gameData/characterData/character";

const { characteristics: char } = characterData;

const Characteristics = () => {
  return (
    <>
      <div>Characteristics</div>

      <CharactisticsField stat="STR" value={char.str} />
      <CharactisticsField stat="CON" value={char.con} />
      <CharactisticsField stat="SIZ" value={char.siz} />

      <CharactisticsField stat="DEX" value={char.dex} />
      <CharactisticsField stat="APP" value={char.app} />
      <CharactisticsField stat="EDU" value={char.edu} />

      <CharactisticsField stat="INT" value={char.int} />
      <CharactisticsField stat="POW" value={char.pow} />
      <CharactisticsField stat="MOV" value={char.mov} />
    </>
  );
};

export default Characteristics;
