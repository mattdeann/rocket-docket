import './RocketDetails.css';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import stockPhoto from '../assets/stock-photo.jpg';

function RocketDetails({throwError, findRocket, id}) {
  const rocket = findRocket(id);

  if (!rocket) {
    throwError("Page not found")
    return <Redirect to='/rocket-docket/error' />
  } else {
    return (
      <main className="rocket-details">
        <section className="rocket-info">
          <h2 className="rocket-name">
            {rocket.name}
          </h2>
          <h3 className="summary info-header">
            Mission Summary:
          </h3>
          <p className="summary info-content" >
            {rocket.mission.description}
          </p>
          <h3 className="date info-header">
            Launch Date and Time:
          </h3>
          <p className="date info-content" >
            {rocket.window_start}
          </p>
          <h3 className="agency info-header">
            Launch Agency:
          </h3>
          <p className="agency info-content" >
            {rocket.launch_service_provider.name}
          </p>
          <h3 className="location info-header">
            Location:
          </h3>
          <p className="location info-content" >
            {rocket.pad.name} at {rocket.pad.location.name}
          </p>
          <h3 className="webcast info-header">
          {rocket.webcast_live ? "Webcast available elsewhere": "No webcast available"}
          </h3>
        </section>
        {/* Should I be doing the below conditional before the return? */}
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
  }
}

RocketDetails.propTypes = {
  findRocket: PropTypes.func,
  id: PropTypes.string
}

export default RocketDetails;