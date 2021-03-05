import './RocketDetails.css'
import stockPhoto from '../assets/stock-photo.jpg';

function RocketDetails({data, id}) {
  const rocket = data.find(rocket => id ===  rocket.slug)
  
  return (
    <main className="rocket-details">
      <section className="rocket-info">
        <h2>
          {rocket.name}
        </h2>
        <h3>
          Mission Summary:
        </h3>
        <p>
          {rocket.mission.description}
        </p>
        <h3>
          Launch Date and Time:
        </h3>
        <p>
          {rocket.window_start}
        </p>
        <h3>
          Launch Agency:
        </h3>
        <p>
          {rocket.launch_service_provider.name}
        </p>
        <h3>
          Location:
        </h3>
        <p>
          {rocket.pad.name} at {rocket.pad.location.name}
        </p>
        <h3>
        {rocket.webcast_live ? "Webcast available elsewhere": "No webcast available"}
        </h3>
      </section>
      {/* Should I be doing the below conditional before the return? */}
      <img className="rocket-image" src={rocket.image || stockPhoto} alt={rocket.name} />
    </main>
  )
}

export default RocketDetails;