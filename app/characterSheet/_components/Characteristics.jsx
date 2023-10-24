import CharactisticsField from "./CharacteristicsField";
import { characterData } from "@/gameData/characterData/character";
import DecoratedTitle from "./DecoratedTitle";

const { characteristics: char } = characterData;

const Characteristics = () => {
  return (
    <>
      <DecoratedTitle title="characteristics" />
      <div>
        <CharactisticsField stat="STR" value={char.str} />
        <CharactisticsField stat="CON" value={char.con} />
        <CharactisticsField stat="SIZ" value={char.siz} />
      </div>
      <div>
        <CharactisticsField stat="DEX" value={char.dex} />
        <CharactisticsField stat="APP" value={char.app} />
        <CharactisticsField stat="EDU" value={char.edu} />
      </div>
      <div>
        <CharactisticsField stat="INT" value={char.int} />
        <CharactisticsField stat="POW" value={char.pow} />
        <CharactisticsField stat="MOV" value={char.mov} />
      </div>
    </>
  );
};

export default Characteristics;
