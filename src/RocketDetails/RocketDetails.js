import './RocketDetails.css'
import stockPhoto from '../assets/stock-photo.jpg';

function RocketDetails({data}) {
  
  return (
    <main className="rocket-details">
      <section className="rocket-content">
        <h2>
          {data.name}
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
      <img className="rocket-image" src={data.image || stockPhoto} alt={data.name} />


    </main>
  )
}