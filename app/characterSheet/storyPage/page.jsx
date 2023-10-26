import StoryFieldCard from "./_components/StoryFieldCard";

const dummyText =
  "Lorem consequat quis nulla esse incididunt. Tempor ea nisi minim esse.Nisi deserunt dolore mollit proident ad exercitation velit. Esseoccaecat incididunt irure adipisicing ut aute fugiat commodo.";

const StoryPage = () => {
  return (
    <>
      <StoryFieldCard header={"personal descriptions"} text={dummyText} />

      <StoryFieldCard header={"ideology/beliefs"} text={dummyText} />

      <StoryFieldCard header={"significant people"} text={dummyText} />

      <StoryFieldCard header={"meaningful locations"} text={dummyText} />

      <StoryFieldCard header={"treasured possessions"} text={dummyText} />

      <StoryFieldCard header={"traits"} text={dummyText} />

      <StoryFieldCard header={"injuries & scars"} text={dummyText} />

      <StoryFieldCard header={"phobias & manias"} text={dummyText} />
    </>
  );
};

export default StoryPage;
