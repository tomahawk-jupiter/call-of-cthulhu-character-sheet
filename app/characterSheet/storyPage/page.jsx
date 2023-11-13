import StoryFieldCard from "./_components/StoryFieldCard";
import { characterData } from "@/gameData/characterData/character";

const {
  personalDescription,
  ideologyAndBeliefs,
  significantPeople,
  meaningfulLocations,
  treasuredPossessions,
  traits,
  injuriesAndScars,
  phobiasAndManias,
} = characterData.backstory;

const dummyText =
  "Lorem consequat quis nulla esse incididunt. Tempor ea nisi minim esse.Nisi deserunt dolore mollit proident ad exercitation velit. Esseoccaecat incididunt irure adipisicing ut aute fugiat commodo.";

const StoryPage = () => {
  return (
    <>
      <StoryFieldCard
        header={"personal descriptions"}
        text={personalDescription}
      />

      <StoryFieldCard header={"ideology/beliefs"} text={ideologyAndBeliefs} />

      <StoryFieldCard header={"significant people"} text={significantPeople} />

      <StoryFieldCard
        header={"meaningful locations"}
        text={meaningfulLocations}
      />

      <StoryFieldCard
        header={"treasured possessions"}
        text={treasuredPossessions}
      />

      <StoryFieldCard header={"traits"} text={traits} />

      <StoryFieldCard header={"injuries & scars"} text={injuriesAndScars} />

      <StoryFieldCard header={"phobias & manias"} text={phobiasAndManias} />
    </>
  );
};

export default StoryPage;
