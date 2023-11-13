import DecoratedTitle from "../_components/DecoratedTitle";
import ExpandableCard from "./_components/ExpandableCard";

const StuffPage = () => {
  return (
    <>
      <DecoratedTitle title="weapons" />

      {/* TODO: make the ExpandableCard reusable for each category in the stuff */}
      <ExpandableCard title="Revolver" content="Info about revolver" />

      <DecoratedTitle title="possessions" />
      <DecoratedTitle title="wealth" />
      <DecoratedTitle title="assets" />
    </>
  );
};

export default StuffPage;
