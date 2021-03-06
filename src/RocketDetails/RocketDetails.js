import './RocketDetails.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import stockPhoto from '../assets/stock-photo.jpg';

function RocketDetails({findRocket, id}) {
  const rocket = findRocket(id);

  if (rocket) {
    return (
      <main className="rocket-details">
        <section className="rocket-info">
          <h2 className="rocket-name">
            {rocket.name || "No infomation available"}
          </h2>
          <h3 className="summary info-header">
            Mission Summary:
          </h3>
          <p className="summary info-content" >
            {rocket.mission.description || "No infomation available"}
          </p>
          <h3 className="date info-header">
            Launch Date and Time:
          </h3>
          <p className="start-date">
          {rocket.window_start.slice(0, 10) || "No infomation available"}
          </p>
          <p className="start-time">
            {rocket.window_start.slice(11) || "No infomation available"}
          </p>
          <h3 className="agency info-header">
            Launch Agency:
          </h3>
          <p className="agency info-content" >
            {rocket.launch_service_provider.name || "No infomation available"}
          </p>
          <h3 className="location info-header">
            Location:
          </h3>
          <p className="location info-content" >
            {rocket.pad.name || "No infomation available"} at {rocket.pad.location.name || "No infomation available"}
          </p>
          <h3 className="webcast info-header">
          {rocket.webcast_live ? "Webcast available elsewhere": "No webcast available"}
          </h3>
        </section>
        <section className="rocket-image-section">
          <Link to={`/rocket-docket`}>
            <article className="back-button">
              Back to Home
            </article>
          </Link>
          <img className="rocket-image" src={rocket.image || stockPhoto} alt={rocket.name} />
        </section>
      </main>
    );
  } else {
    return <ErrorPage errorMessage={"404 Page not found"} />
  }
}

RocketDetails.propTypes = {
  findRocket: PropTypes.func,
  id: PropTypes.string
}

export default RocketDetails;