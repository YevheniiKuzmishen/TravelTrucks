import { useNavigate } from "react-router-dom";
import css from "./CamperCard.module.css";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

function CamperCard({ camper }) {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <div className={css.camperCard}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={css.image}
      />

      <div className={css.details}>
        <h3 className={css.name}>{camper.name}</h3>
        <div className={css.location}>
          <FaMapMarkerAlt /> {camper.location}
        </div>
        <div className={css.rating}>
          <FaStar className={css.starIcon} /> {camper.rating.toFixed(1)}
          <span className={css.reviews}>({camper.reviews.length} Reviews)</span>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.features}>
          <span className={css.feature}>
            {camper.transmission === "automatic" ? "Automatic" : "Manual"}
          </span>
          <span className={css.feature}>{camper.engine}</span>
          {camper.AC && <span className={css.feature}>AC</span>}
          {camper.kitchen && <span className={css.feature}>Kitchen</span>}
          {camper.TV && <span className={css.feature}>TV</span>}
        </div>

        <div className={css.price}>€{camper.price.toFixed(2)}</div>

        <button onClick={handleShowMore} className={css.showMoreButton}>
          Show more
        </button>
      </div>
    </div>
  );
}

export default CamperCard;
