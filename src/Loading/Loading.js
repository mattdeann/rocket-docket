import './Loading.css';
import logo from '../assets/rocket-docket-logo.png';

function Loading() {
  return (
    <section className="loading-screen">
      <img className="loading-image" src={logo} alt="logo"/>
      Loading...
    </section>
  )
}

export default Loading;