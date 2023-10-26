import DecoratedTitle from "../_components/DecoratedTitle";
import ExpandableCard from "./_components/ExpandableCard";

const StuffPage = () => {
  return (
    <>
      <DecoratedTitle title="weapons" />

      <ExpandableCard />
      <ExpandableCard />
      <ExpandableCard />

      <DecoratedTitle title="possessions" />
      <DecoratedTitle title="wealth" />
      <DecoratedTitle title="assets" />
    </>
  );
};

export default StuffPage;
