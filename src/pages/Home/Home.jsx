import { useNavigate } from "react-router-dom";
import css from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={css.home}>
      <section className={css.banner}>
        <div className={css.bannerContent}>
          <h1 className={css.bannerTitle}>Campers of your dreams</h1>
          <p className={css.bannerSubtitle}>
            You can find everything you want in our catalog!
          </p>
          <button
            onClick={() => navigate("/catalog")}
            className={css.viewNowBtn}
          >
            View Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
