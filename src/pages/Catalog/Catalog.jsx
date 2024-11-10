import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, resetCampers } from "../../store/slices/campersSlice";
import {
  setLocation,
  setType,
  toggleEquipment,
  clearFilters,
} from "../../store/slices/filtersSlice";

import Filters from "../../components/Filters/Filters";
import CamperList from "../../components/CamperList/CamperList";
import css from "./Catalog.module.css";

function CatalogPage() {
  const dispatch = useDispatch();
  const {
    items: campers,
    status,
    error,
    page,
    hasMore,
  } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(
      fetchCampers({
        page: 1,
        limit: 4,
        location: filters.location,
        form: filters.type,
        AC: filters.equipment.includes("AC"),
        kitchen: filters.equipment.includes("kitchen"),
        TV: filters.equipment.includes("TV"),
        bathroom: filters.equipment.includes("bathroom"),
      })
    );
  }, [filters]);

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleTypeChange = (type) => {
    dispatch(setType(type));
  };

  const handleEquipmentChange = (equipment) => {
    dispatch(toggleEquipment(equipment));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const loadMoreCampers = () => {
    if (hasMore && status !== "loading") {
      dispatch(
        fetchCampers({
          page: page,
          limit: 4,
          location: filters.location,
          form: filters.type,
          AC: filters.equipment.includes("AC"),
          kitchen: filters.equipment.includes("kitchen"),
          TV: filters.equipment.includes("TV"),
          bathroom: filters.equipment.includes("bathroom"),
        })
      );
    }
  };

  return (
    <div className={css.catalogPage}>
      <h1>Our Campers</h1>
      <Filters
        location={filters.location}
        type={filters.type}
        equipment={filters.equipment}
        onLocationChange={handleLocationChange}
        onTypeChange={handleTypeChange}
        onEquipmentChange={handleEquipmentChange}
        onClearFilters={handleClearFilters}
        onSearch={() => {
          dispatch(resetCampers());
          dispatch(
            fetchCampers({
              page: 1,
              limit: 4,
              location: filters.location,
              form: filters.type,
              AC: filters.equipment.includes("AC"),
              kitchen: filters.equipment.includes("kitchen"),
              TV: filters.equipment.includes("TV"),
              bathroom: filters.equipment.includes("bathroom"),
            })
          );
        }}
      />
      <CamperList
        campers={campers}
        status={status}
        error={error}
        loadMoreCampers={loadMoreCampers}
        hasMore={hasMore}
      />
    </div>
  );
}

export default CatalogPage;
