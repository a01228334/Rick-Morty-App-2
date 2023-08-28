import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>Gama es un instructor muy simpatico y sus coleguillas lo quieren</h1>


      <div className="buttonContainer">
          <Link to="/home" className="linkButton linkButton-home">Regresar</Link>
      </div>


    </div>

    
  );
}

export default About;
