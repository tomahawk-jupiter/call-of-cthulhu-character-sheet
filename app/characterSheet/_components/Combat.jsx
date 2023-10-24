import { weapons } from "../../../gameData/weapons";
import DecoratedTitle from "./DecoratedTitle";

const Combat = () => {
  return (
    <>
      <DecoratedTitle title="combat" />
      <table>
        <tr>
          <th>Weapons</th>
          <th>Skill</th>
          <th>Damage</th>
          <th>Range</th>
          <th>Attacks</th>
          <th>Ammo</th>
          <th>Malf.</th>
        </tr>
        <tr>
          <td>{weapons[1].name}</td>
          <td>{weapons[1].skill}</td>
          <td>{weapons[1].damage}</td>
          <td>{weapons[1].baseRange}</td>
          <td>{weapons[1].usesPerRound}</td>
          <td>{weapons[1].capacity}</td>
          <td>{weapons[1].malfunction}</td>
        </tr>
      </table>

      <hr />

      <div>Damge Bonus</div>
      <div>Build</div>
      <div>Dodge</div>
    </>
  );
};

export default Combat;
