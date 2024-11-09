import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../store/slices/campersSlice";
import { addFavorite, removeFavorite } from "../store/slices/favoritesSlice";

function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const campersStatus = useSelector((state) => state.campers.status);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    if (campersStatus === "idle") {
      dispatch(fetchCampers());
    }
  }, [campersStatus, dispatch]);

  const handleAddFavorite = (camper) => {
    dispatch(addFavorite(camper));
  };

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  const isFavorite = (id) => favorites.some((favorite) => favorite.id === id);

  return (
    <div>
      <h1>Catalog Page</h1>
      {campersStatus === "loading" && <p>Loading...</p>}
      {campersStatus === "succeeded" && (
        <ul>
          {Array.isArray(campers) &&
            campers.map((camper) => (
              <li key={camper.id}>
                {camper.name}
                {isFavorite(camper.id) ? (
                  <button onClick={() => handleRemoveFavorite(camper.id)}>
                    Remove from Favorites
                  </button>
                ) : (
                  <button onClick={() => handleAddFavorite(camper)}>
                    Add to Favorites
                  </button>
                )}
              </li>
            ))}
        </ul>
      )}
      {campersStatus === "failed" && <p>Error loading campers.</p>}
    </div>
  );
}

export default Catalog;
