import './RocketDetails.css'
import stockPhoto from '../assets/stock-photo.jpg';

function RocketDetails({data, id}) {
  const rocket = data.find(rocket => id ===  rocket.slug)
  
  return (
    <main className="rocket-details">
      <section className="rocket-content">
        <h2>
          {rocket.name}
        </h2>
        <h3>
          Window Start
        </h3>
        <p>

        </p>
        <h3>
          Agency
        </h3>
        <p>

        </p>
        <h3>
          pad.name and pad.location.name
        </h3>
        <p>

        </p>
        <h3>
          Window Start
        </h3>
        <p>
          Map image?
        </p>
        <h3>
          Window Start
        </h3>
        <p>

        </p>
      </section>
      {/* Should I be doing the below conditional before the return? */}
      <img className="rocket-image" src={rocket.image || stockPhoto} alt={rocket.name} />


    </main>
  )
}

export default RocketDetails;