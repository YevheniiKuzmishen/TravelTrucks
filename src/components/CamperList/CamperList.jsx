import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

const CamperList = ({ campers, loadMoreCampers, hasMore, status, error }) => {
  if (status === "loading") return <p>Loading campers...</p>;
  if (error) return <p>Error loading campers: {error}</p>;
  if (campers.length === 0) return <p>No campers available</p>;

  return (
    <div className={css.camperList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
      {hasMore && (
        <button onClick={loadMoreCampers} className={css.loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CamperList;
